import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import Texto from './src/components/Texto/Texto';
import InputAndLabel from './src/components/InputAndLabel/InputAndLabel';
import Button from './src/components/Button/Button';
import TextButton from './src/components/TextButton/TextButton';
import ItemTable from './src/components/ItemTable/ItemTable';
import Table from './src/components/Table/Table';
import ButtonGoBack from './src/components/ButtonGoBack/ButtonGoBack';
import Modal from './src/components/Modal/Modal';

import Login from './src/views/Login/Login';
import Cadastro from './src/views/Cadastro/Cadastro';
import SendEmail from './src/views/RecuperarSenha/SendEmail';
import NewPassword from './src/views/RecuperarSenha/NewPassword';
import Menu from './src/views/Menu/Menu';
import TreinarAgora from './src/views/TreinarAgora/TreinarAgora';
import TreinoDeHoje from './src/views/TreinarAgora/TreinoDeHoje';
import Treinos from './src/views/Treinos_e_Exercicios/Treinos';



export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  let [fontsLoaded] = useFonts({
    'KeaniaOne-Regular': require('./assets/fonts/KeaniaOne-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return undefined
  }



  items = [
    { label: 'Footbal', value: 'footballl' },
    { label: 'Baseball', value: 'baseball' },
    { label: 'Hockey', value: 'hockey' },
  ]

  const data = [
    { exercicio: 'Item 1', carga: '20', tipo: 'carga' },
    { exercicio: 'Item 2', carga: '30', tipo: 'carga' },
    { exercicio: 'Item 3', carga: '40', tipo: 'carga' },
    { exercicio: 'Item 4', carga: '20', tipo: 'carga' },
    { exercicio: 'Item 5', carga: '30', tipo: 'carga' },
    { exercicio: 'Item 6', carga: '40', tipo: 'carga' },
    { exercicio: 'Item 7', carga: '20', tipo: 'carga' },
    { exercicio: 'Item 8', carga: '30', tipo: 'carga' },
    { exercicio: 'Item 9', carga: '40', tipo: 'carga' },
    { exercicio: 'Item 10', carga: '20', tipo: 'carga' },
    { exercicio: 'Item 11', carga: '30', tipo: 'carga' },
    { exercicio: 'Item 12', carga: '40', tipo: 'carga' },
    { exercicio: 'Item 13', carga: '20', tipo: 'carga' },
    { exercicio: 'Item 14', carga: '30', tipo: 'carga' },
    { exercicio: 'Item 15', carga: '40', tipo: 'carga' },
    { exercicio: 'Item 16', carga: '20', tipo: 'carga' },
    { exercicio: 'Item 17', carga: '30', tipo: 'carga' },
    { exercicio: 'Item 18', carga: '40', tipo: 'carga' },
  ];

  const data2 = [
    { exercicio: 'Item 1', tipo: 'EditAndRemove' },
    { exercicio: 'Item 2', tipo: 'edit' },
    { exercicio: 'Item 3', tipo: 'remove' },
  ];
  return (
    <LinearGradient
      colors={[
        'rgba(235,0,255,0.85)',   // EB00FF em 85%
        'rgba(173,9,238,0.85)',   // AD09EE em 85%
        'rgba(173,9,238,1)',      // AD09EE em 100%
        'rgba(173,9,238,0.85)',   // AD09EE em 85%
        'rgba(235,0,255,0.8)'     // EB00FF em 80%
      ]}
      locations={[0, 0.25, 0.5, 0.75, 1]}
      style={styles.container}
    >
      {/* <Texto texto="Login" tam="Grande" /> */}
      {/* <InputAndLabel texto="Nome" placeholder="Daniel" items={items} />
      <InputAndLabel texto="E-mail" placeholder="email@email.com" items={items} tipo="Select" />
      <InputAndLabel texto="Senha" placeholder="Senha" items={items} tipo="Senha" />
      <Button texto="Entrar" />
      <TextButton texto="Não possui uma conta? Cadastre-se agora!" />
      <TextButton texto="Esqueceu sua senha? Recupere ela aqui!" /> */}
      {/* <ItemTable exercicio="Supino Retoaaaaaaaaaaaa" carga="20" tipo="carga" />
      <ItemTable exercicio="Supino Reto" carga="20" tipo="carga" />
      <ItemTable exercicio="Supino Reto" tipo="edit" />
      <ItemTable exercicio="Supino Reto" tipo="EditAndRemove" />
      <ItemTable exercicio="Supino Retoaaaaaaaaaaaaaaaaaaaa" tipo="remove" /> */}
      {/* <Table data={data} /> */}
      {/* <Table data={data2} /> */}
      {/* <TouchableOpacity onPress={openModal}>
        <Texto texto="Abrir Modal" TextoBotao="Fechar" />
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
        onClose={closeModal}
        texto="Titulo"
        label="Label"
        textoBotao="Fechar"
        tipo="ModalInput"
      />
      <ButtonGoBack />
      <StatusBar style="auto" /> */}
      {/* <Login /> */}
      {/* <Cadastro /> */}
      {/* <SendEmail /> */}
      {/* <NewPassword /> */}
      {/* <Menu /> */}
      {/* <TreinarAgora /> */}
      {/* <TreinoDeHoje /> */}
      <Treinos />
      <ButtonGoBack />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
});
