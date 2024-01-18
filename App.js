import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

import TituloGrande from './src/components/TituloGrande/TituloGrande';
import TituloMedio from './src/components/TituloMedio/TituloMedio';

export default function App() {

  let [fontsLoaded] = useFonts({
    'KeaniaOne-Regular': require('./assets/fonts/KeaniaOne-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return undefined
  }
  return (
    <LinearGradient
      colors={[
        'rgba(235,0,255,1)',   // EB00FF em 100%
        'rgba(173,9,238,0.8)',   // AD09EE em 80%
        'rgba(173,9,238,0.85)',      // AD09EE em 85%
        'rgba(173,9,238,0.8)',   // AD09EE em 80%
        'rgba(235,0,255,1)'     // EB00FF em 100%
      ]}
      locations={[0, 0.3, 0.5, 0.8, 1]}
      style={styles.container}
    >
      <TituloGrande texto="Login" />
      <TituloMedio texto="Recuperar Senha" />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
