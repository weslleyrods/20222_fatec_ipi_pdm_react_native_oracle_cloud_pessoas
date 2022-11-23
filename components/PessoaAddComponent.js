import { ToastAndroid, StyleSheet } from 'react-native'
import React, {useState} from 'react'

import * as pessoaService from '../service/PessoaService'

import{
    Button,
    Card,
    Input
} from '@rneui/themed'
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider'

const PessoaAddComponent = ({navigation}) => {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [hobby, setHobby] = useState('')
    
    const addPessoa = async ()=>{

        try{
            const res = (await pessoaService.cadastrarPessoa({nome, idade, hobby})).data
            console.log(res)
            ToastAndroid.show('Pessoa cadastrada...', ToastAndroid.LONG)    
        }
        catch(erro){
            console.log('erro: '+erro);
        }
    }

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
                onChangeText={nomeDigitado => setNome(nomeDigitado)}
                value={nome}
            />
            <Input
                placeholder='Idade'
                leftIcon={{type: 'font-awesome', name: 'info'}}
                style={styles.textInput}
                onChangeText={idadeDigitada=> setIdade(idadeDigitada)}
                value={idade}
            />
            <Input
                placeholder='Hobby'
                leftIcon={{type: 'font-awesome', name: 'heart'}}
                style={styles.textInput}
                onChangeText={setHobby}
                value={hobby}
            />
            <Button
            title="OK"
            type="outline"
            buttonStyle={styles.button}
            onPress={addPessoa}
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