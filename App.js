import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

import Texto from './src/components/Texto/Texto';
import InputAndLabel from './src/components/InputAndLabel/InputAndLabel';
import Button from './src/components/Button/Button';
import TextButton from './src/components/TextButton/TextButton';
import ItemTable from './src/components/ItemTable/ItemTable';



export default function App() {

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
      <Texto texto="Login" tam="Grande" />
      {/* <InputAndLabel texto="Nome" placeholder="Daniel" items={items} />
      <InputAndLabel texto="E-mail" placeholder="email@email.com" items={items} tipo="Select" />
      <InputAndLabel texto="Senha" placeholder="Senha" items={items} tipo="Senha" />
      <Button texto="Entrar" />
      <TextButton texto="Não possui uma conta? Cadastre-se agora!" />
      <TextButton texto="Esqueceu sua senha? Recupere ela aqui!" /> */}
      <ItemTable exercicio="Supino Retoaaaaaaaa" carga="20" />
      <ItemTable exercicio="Supino Reto" carga="20" />
      <StatusBar style="auto" />
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
