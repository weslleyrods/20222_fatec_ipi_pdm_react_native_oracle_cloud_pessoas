import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'

import {
    LinearProgress,
} from '@rneui/themed'

import * as pessoaService from '../service/PessoaService'
const PessoaListComponent = () => {
    //const [pessoas, setPessoas] = useState([])
    const [state, setState] = useState({
        pessoa: []
    })

    const updateList = async ()=>{
        setState({pessoa: (await pessoaService.obterLista()).data.items})
    }

    useEffect(()=>{
        const go = async ()=>{
            await updateList()
        }
        go()
    }, [])
    return ( 
        <View>
            {
                state.pessoa.length > 0 ?
                    <Text>Tem alguma coisa</Text>
                :
                    <LinearProgress />
            }
        </View>
    )
}

export default PessoaListComponent

const styles = StyleSheet.create({})