import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import TabsNavigation from './TabsNavigation'

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  )
}

export default AppNavigator;