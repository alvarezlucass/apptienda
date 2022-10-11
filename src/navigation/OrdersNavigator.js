import { Colors } from '../constants/themes/IndexColors';
import { Order } from '../screens/IndexScreens';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from '../utils/UtilsIndex';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions= {{
            headerStyle: {
                backgroundColor: isAndroid ? Colors.primary : Colors.secondary,
            },
            headerTintColor: Colors.text,
            headerTitleStyle: {
                fontFamily: 'Play-Regular'
            },
        }} 
    >
        <Stack.Screen 
            name='Orders'
            component={Order}
        />
        
    </Stack.Navigator>
  )
}

export default OrdersNavigator;