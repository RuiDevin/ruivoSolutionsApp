import { Text, View, StyleSheet } from 'react-native';
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f1f1f1',
        padding: 22,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
});