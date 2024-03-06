import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Texto from './src/components/Texto/Texto';
import InputAndLabel from './src/components/InputAndLabel/InputAndLabel';
import Button from './src/components/Button/Button';
import TextButton from './src/components/TextButton/TextButton';
import ItemTable from './src/components/ItemTable/ItemTable';
import Table from './src/components/Table/Table';
import ButtonGoBack from './src/components/ButtonGoBack/ButtonGoBack';
import Modal from './src/components/Modal/Modal';

import Menu from './src/views/Menu/Menu';
import Login from './src/views/Login/Login';
import Cadastro from './src/views/Cadastro/Cadastro';
import SendEmail from './src/views/RecuperarSenha/SendEmail';
import NewPassword from './src/views/RecuperarSenha/NewPassword';
import TreinarAgora from './src/views/TreinarAgora/TreinarAgora';
import TreinoDeHoje from './src/views/TreinarAgora/TreinoDeHoje';
import Treinos from './src/views/Treinos_e_Exercicios/Treinos';
import Exercicios from './src/views/Treinos_e_Exercicios/Exercicios';
import AdicionarTreino from './src/views/AdicionarTreino/AdicionarTreino';



export default function App() {

  const Stack = createNativeStackNavigator()

  let [fontsLoaded] = useFonts({

    'KeaniaOne-Regular': require('./assets/fonts/KeaniaOne-Regular.ttf'),

  });

  if (!fontsLoaded) {
    return undefined
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendEmail"
          component={SendEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TreinarAgora"
          component={TreinarAgora}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TreinoDeHoje"
          component={TreinoDeHoje}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Treinos"
          component={Treinos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Exercicios"
          component={Exercicios}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdicionarTreino"
          component={AdicionarTreino}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

