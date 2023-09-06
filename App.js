import { StyleSheet } from 'react-native';
import Cliente from '/src/components/Clientes';
import NewCliente from '/src/components/NewCliente'
import { ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";

const clientes = [
  {
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
  },
];

const ListClientes = ({ navigation }) => {
  const [clienteslist, setClientesList] = useState(clientes);

  return (
    <ScrollView style={styles.scroll}>
      {clienteslist.map((cliente, index) => (
        <Cliente key={index} cliente={cliente} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Clientes" component={ListClientes} />
        <Stack.Screen name="Cadastro" component={NewCliente} />
      </Stack.Navigator>
    </NavigationContainer>
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