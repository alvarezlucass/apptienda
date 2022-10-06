import { IndexCategories, ProductIndex, ProductsIndex } from '../screens/IndexScreens';

import {Colors} from '../constants/themes/IndexColors';
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from '../utils/UtilsIndex';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Categories'
        screenOptions={{
            headerStyle:{ 
                backgroundColor : isAndroid ? Colors.primary : Colors.secundary,
            },
            headerTintColor: Colors.text,
            headerTitleStyle: {
                fontFamily: 'Play-Regular',
            },
        }}
    >
        <Stack.Screen
            name='Categories'
            component={IndexCategories}
            options={{
                title:'Categories',
            }}
         />
         <Stack.Screen
            name='Products'
            component={ProductsIndex}
            options={({route}) => ({
                title: route.params.name,
            })}
         />
         <Stack.Screen 
            name='Product'
            component={ProductIndex}
            options= {({route}) => ({
                title: route.params.name,
            })}
         />
    </Stack.Navigator>
  )
}

export default ShopNavigator;