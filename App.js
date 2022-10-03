import { ActivityIndicator } from 'react-native';
import CardNavigator from './src/navigation/CardNavigator';
import React from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts ({
    'Play-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),

  });
  if(!loaded){
    return <ActivityIndicator />
  }
  return(
    <CardNavigator />

  );
}
