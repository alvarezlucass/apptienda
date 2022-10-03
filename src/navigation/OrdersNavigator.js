import { Colors } from '../constants/themes/Colors';
import { IndexOrder } from '../screens/IndexScreens';
import React from 'react';
import { StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from '../utils';

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
            component={IndexOrder}
        />
        
    </Stack.Navigator>
  )
}

export default OrdersNavigator;