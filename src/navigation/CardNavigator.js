import { Colors } from '../constants/themes/IndexColors';
import { IndexCart } from '../screens/IndexScreens';
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from '../utils/UtilsIndex';

const Stack = createNativeStackNavigator();

const CardNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Cart'
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? Colors.primary : Colors.secondary,
        },
        headerTintColor: Colors.text,
        headerTitleStyle: {
          fontFamily: 'Play-Regular',
        },
      }}
      >
        <Stack.Screen 
          name= 'Cart'
          component={ IndexCart }
        />
      </Stack.Navigator>
  )
}

export default CardNavigator;