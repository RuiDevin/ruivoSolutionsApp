import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native"
import { Button } from "react-native";

import clienteService from '/src/services/clientes.js';
import { useEffect, useState } from 'react';


export default function Clientes({ cliente, navigation }) {
    const [clientes, setClientes] = useState([]);

    useEffect(async () => {
        const data = await clienteService.getAllClientes();
        setClientes(data);
    }, []);

    async function updateClientes(cliente) {
        const data = await clienteService.getAllClientes();
        setClientes(data);
    }

    return (
        <View>
            <View style={styles.addButton}>
                <Button
                    title="Cadastar Novo Cliente"
                    onPress={() => navigation.navigate("Cadastro")}
                />
            </View>
            <View style={styles.form}>
                <Text style={styles.h1}
                >Clientes em Espera...</Text>
                {clientes.map((cliente) => (
                    <Text >{cliente.nome}</Text>
                ))}
                <View>
                    <Button
                        title='Atualizar'
                        onPress={() => updateClientes()} />
                    <StatusBar style="auto" />
                </View>
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
        padding: 20,
    },
    addButton: {
        margin: 20,
        width: "50%",
        alignSelf: "center",
    }
});