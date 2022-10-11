import { ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
// import { Provider } from 'react-redux';
import React from 'react';
// import store from './src/store';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts ({
    'Play-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),

  });
  if(!loaded){
    return <ActivityIndicator />;
  }
  return(
    // <Provider store={store}>
    //   <AppNavigator />
    // </Provider>
    <AppNavigator />


  );
}
