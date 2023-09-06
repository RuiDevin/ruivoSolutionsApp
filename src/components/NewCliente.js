import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Clientes() {
    const [newCliente, setCliente] = useState({});

    const postCliente = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/clientes/", newCliente);
            console.log(response.data); // Exibe a resposta no console
        } catch (error) {
            console.error('Erro ao enviar cliente:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Clientes</Text>
            <View style={styles.form}>
                <TextInput
                    onChangeText={(nome) => setCliente({ ...newCliente, nome })}
                    style={styles.input}
                    placeholder="Nome"
                />
                <TextInput
                    onChangeText={(email) => setCliente({ ...newCliente, email })}
                    style={styles.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                />
                <TextInput
                    onChangeText={(telefone) => setCliente({ ...newCliente, telefone })}
                    style={styles.input}
                    placeholder="Telefone"
                    keyboardType="phone-pad"
                />
                <TextInput
                    onChangeText={(endereco) => setCliente({ ...newCliente, endereco })}
                    style={styles.input}
                    placeholder="Endereço"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => postCliente()}
                >
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
    },
    form: {
        width: '100%',
    },
    input: {
        height: 40,
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
