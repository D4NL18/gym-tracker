import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import TituloGrande from './src/components/TituloGrande/TituloGrande';
import { LinearGradient } from 'expo-linear-gradient';

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
        'rgba(235,0,255,0.85)',   // EB00FF em 85%
        'rgba(173,9,238,0.85)',   // AD09EE em 85%
        'rgba(173,9,238,1)',      // AD09EE em 100%
        'rgba(173,9,238,0.85)',   // AD09EE em 85%
        'rgba(235,0,255,0.8)'     // EB00FF em 80%
      ]}
      locations={[0, 0.25, 0.5, 0.75, 1]}
      style={styles.container}
    >
      <TituloGrande texto="Login" />
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