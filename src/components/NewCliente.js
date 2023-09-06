import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';


export default function Clientes() {
    async function postCliente() {
        await axios
            .post("http://127.0.0.1:8000/clientes/", newCliente)
            .then((response) => console.log(response));
    }
    const [newCliente, setCliente] = useState({});

    return (

        <View style={styles.form}>
            <Text style={styles.h1}
            >Cadastro de Clientes</Text>
            <TextInput
                onChangeText={(nome) => setCliente({ ...newCliente, nome })}
                style={styles.text}
                label={'nome'}
                placeholder={'Digite seu nome'}
            ></TextInput>
            <TextInput
                onChangeText={(email) => setCliente({ ...newCliente, email })}
                style={styles.text}
                label={'email'}
                placeholder={'Digite seu e-mail'}
            ></TextInput>
            <TextInput
                onChangeText={(telefone) => setCliente({ ...newCliente, telefone })}
                style={styles.text}
                label={'telefone'}
                placeholder={'Digite seu telefone'}
            ></TextInput>
            <TextInput
                onChangeText={(endereco) => setCliente({ ...newCliente, endereco })}
                style={styles.text}
                label={'endereco'}
                placeholder={'Digite seu endereco'}
            ></TextInput>
            <View>
                <Button
                    title='Enviar'
                    onPress={() => postCliente()}
                />
                <StatusBar style="auto" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: "auto",
        margin: 10,
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