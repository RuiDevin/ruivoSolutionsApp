import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Clientes from './src/components/Clientes';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Clientes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});