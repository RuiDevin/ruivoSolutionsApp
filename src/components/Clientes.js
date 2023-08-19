import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import clienteService from '../services/cliente';
import { useEffect, useState } from 'react';

const [clientes, setClientes] = useState([]);

useEffect(async () => {
    const data = await clienteService.getAllClientes();
    setClientes(data);
}, []);

async function saveClientes() {
    const data = await clienteService.getAllClientes();
    setClientes(data);
}

const Clientes = ({ clientes, navigation }) => {
    return (
        <View style={styles.form}>
            <Text style={styles.h1}
            >Cadastro de Clientes</Text>
            {clientes.map((cliente) => (
                <TextInput
                    key={cliente.id}
                    style={styles.text}
                    label={'nome'}
                    placeholder={'Digite seu nome'}
                >{cliente.name}</TextInput>,
                <TextInput
                    key={cliente.id}
                    style={styles.text}
                    label={'email'}
                    placeholder={'Digite seu e-mail'}
                >{cliente.email}</TextInput>,
                <TextInput
                    key={cliente.id}
                    style={styles.text}
                    label={'telefone'}
                    placeholder={'Digite seu telefone'}
                >{cliente.telefone}</TextInput>,
                <TextInput
                    key={cliente.id}
                    style={styles.text}
                    label={'endereco'}
                    placeholder={'Digite seu endereco'}
                >{cliente.endereco}</TextInput>
            ))}
            <View>
                <Button
                    title='Enviar'
                    onPress={() => saveClientes()}
                />
                <StatusBar style="auto" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 45,
        justifyContent: 'center',
        alignContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    h1: {

        fontWeight: 'bold',
        fontSize: 20,
        padding: 40,
    },
    text: {
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth: 1,
    },
});

export default Clientes;