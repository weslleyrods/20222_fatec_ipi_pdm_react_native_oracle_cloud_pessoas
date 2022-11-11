import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import{
    Button,
    Card,
    Input
} from '@rneui/themed'

const PessoaAddComponent = ({navigation}) => {
    return (
    <>
        <Card containerStyle={styles.card}>
            <Card.Title>
                Cadastro de Pessoas
            </Card.Title>
            <Card.Divider></Card.Divider>
            <Input
                placeholder='Nome'
                leftIcon={{type: 'font-awesome', name: 'user'}}
                style={styles.textInput}
            />
            <Input
                placeholder='Idade'
                leftIcon={{type: 'font-awesome', name: 'info'}}
                style={styles.textInput}
            />
            <Input
                placeholder='Hobby'
                leftIcon={{type: 'font-awesome', name: 'heart'}}
                style={styles.textInput}
            />
            <Button
            title="OK"
            type="outline"
            buttonStyle={styles.button}
            />
        </Card>
    </>
    //<></> - não permite aplicar estilo e não gera um elemento na árvore dom, poupando memória
    )
}

export default PessoaAddComponent

const styles = StyleSheet.create({
    card:{
        paddingHorizontal: 12,
        borderRadius: 8
    },
    button:{
        borderRadius: 8
    },
    textInput: {
        textAlign: 'center',
        margin: 0,
        padding: 0
    }
})