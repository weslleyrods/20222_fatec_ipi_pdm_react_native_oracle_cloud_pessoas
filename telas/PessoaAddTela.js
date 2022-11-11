
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PessoaAddComponent from '../components/PessoaAddComponent'


//por conta do PessoaAddTela estar sendo renderizado pelo screen, ele ganha o objeto navigation()operações de navegação
const PessoaAddTela = ({navigation}) => {
    return (
    <View>
        <PessoaAddComponent navigation={navigation}/>
    </View>
    )
}

export default PessoaAddTela

const styles = StyleSheet.create({
    
})