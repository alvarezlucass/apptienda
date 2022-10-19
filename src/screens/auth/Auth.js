import { Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {use, useReducer, useState} from 'react'
import { UPDATED_FORM, onFocusOut, onInputChange } from '../../utils/UtilsIndex';
import { signIn, signUp } from '../../store/IndexStore';

import { Colors } from '../../constants/themes/IndexColors';
import { Input } from '../../components/IndexComp';
import { styles } from './styles';
import { useDispatch } from 'react-redux'

const initialState = {
  email: { value: '', error: '', touched: false, hasError: true},
  password: { value: '', error: '', touched: false, hasError: true},
  isFormValid: false,
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM:
        const { name, value, hasError, error, touched, isFormValid} = action.data;
        return {
            ...state,
            [name]: {
                ...state[name],
                value,
                hasError,
                error,
                touched
            },
            isFormValid
        }
        default:
            return state;
    }
}

const Auth = ({navigation}) => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [formState, dispactchFormState] = useReducer(formReducer, initialState);
    const title = isLogin ? 'Login' : 'Registro';
    const message = isLogin ? 'No tienes cuenta?' : 'Ya tienes cuenta?';
    const messageAction = isLogin ? 'Ingresar' : 'Registrarse';

    const onHandleSubmit = () => {
        const { password, email } = formState;
        dispatch(isLogin ? signIn(email.value, password.value ) : signUp(email.value, password.value));
    };
    
    const onHandleChange = (value, type) => {
        onInputChange(type, value, dispactchFormState, formState)
    };
    
    const onHandleBlur = (value, type) => {
    onFocusOut(type, value, dispactchFormState, formState)
};

    return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior='padding'>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
            style={styles.input}
            label= 'Email'
            placeholder='Ingrese su email'
            value={formState.email.value}
            placeholderTextColor= {Colors.gray}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(text) => onHandleChange(text,'email')}
            onBlur={(e)=> onHandleBlur(e.nativeEvent.text, 'email')}
            hasError={formState.email.error}
            touched={formState.email.touched}
         />
         <Input
            style={styles.input}
            label='Password'
            placeholderTextColor={Colors.gray}
            value={formState.password.value}
            placeholder='Ingrese su Contraseña'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(text) => onHandleChange(text, 'password')}
            onBlur={(e)=> onHandleBlur(e.nativeEvent.text, 'password')}
            hasError={formState.password.error}
            error={formState.password.error}
            touched={formState.password.touched}
          />
          <Button
            title={messageAction}
            color={Colors.primary}
            onPress={onHandleSubmit}
            disabled={!formaState.isFormValid}
           />
           <View style={styles.prompt}>
            <TouchableOpacity style={styles.promptButton} onPress= {() => setIsLogin(!isLogin)}>
                <Text style={styles.promptMessage}>{message}</Text>
            </TouchableOpacity>
           </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Auth;