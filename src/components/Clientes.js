import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList } from 'react-native';
import clienteService from '../services/clientes.js';

export default function Clientes({ navigation }) {
    const [clientes, setClientes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await clienteService.getAllClientes();
                setClientes(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const updateClientes = async () => {
        setIsLoading(true);
        const data = await clienteService.getAllClientes();
        setClientes(data);
        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.addButton}>
                <Button
                    title="Cadastrar Novo Cliente"
                    onPress={() => navigation.navigate("Cadastro")}
                    color="#007AFF"
                />
            </View>
            <View style={styles.form}>
                <Text style={styles.title}>Clientes em Espera...</Text>
                {isLoading ? (
                    <Text>Carregando...</Text>
                ) : (
                    <FlatList
                        data={clientes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Text style={styles.clienteItem}>{item.nome}</Text>
                        )}
                    />
                )}
                <Button
                    title='Atualizar'
                    onPress={() => updateClientes()}
                    color="#007AFF"
                    disabled={isLoading}
                />
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F4F4F4',
    },
    addButton: {
        marginVertical: 10,
    },
    form: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    clienteItem: {
        marginBottom: 10,
    },
});
