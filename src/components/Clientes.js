import { View, Text, Button, StyleSheet, TextInput } from 'react-native'

// import ClienteService from './src/services/cliente';
// import { useEffect, useState } from 'react';

// const [clientes, setClientes] = useState([]);

// useEffect(async () => {
//     const data = await clienteService.getAllClientes();
//     setClientes(data);
// }, []);

// async function updateClientes() {
//     const data = await clienteService.getAllClientes();
//     setclientes(data);
// }

const Clientes = ({ clientes, navigation }) => {
    return (
        <View style={styles.form}>
            <Text style={styles.h1}
            >Cadastro de Clientes</Text>
            <TextInput style={styles.text}
                label={'nome'}
                placeholder={'Digite seu nome'}
            ></TextInput>
            <TextInput style={styles.text}
                label={'email'}
                placeholder={'Digite seu e-mail'}
            ></TextInput>
            <TextInput style={styles.text}
                label={'telefone'}
                placeholder={'Digite seu telefone'}
            ></TextInput>
            <TextInput style={styles.text}
                label={'endereco'}
                placeholder={'Digite seu endereco'}
            ></TextInput>
            <View>
                <Button
                    title='Enviar'
                    onPress={() => updateClientes()}
                />
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