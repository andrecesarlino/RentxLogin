import 'react-native-gesture-handler';

import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import AppLoading from 'expo-app-loading';

import theme from './src/screens/styles/theme';

import { Routes } from './src/routes';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );

}