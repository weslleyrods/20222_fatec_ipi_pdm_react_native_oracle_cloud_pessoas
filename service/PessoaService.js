import axios from 'axios'

const endpointPessoa  ='/pessoas/'

const base = axios.create({
    baseURL:'https://g8c2b7c2d374e22-baseexemplo.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/',
    headers: {'Content-Type': 'application/json'}  
})


export const obterLista=()=>{
    return base.get(endpointPessoa)
}

export const cadastrarPessoa=(pessoa)=>{
    return base.post(
        endpointPessoa, 
        pessoa,
        // {headers: {'Content-Type': 'application/json'}}
    )
}