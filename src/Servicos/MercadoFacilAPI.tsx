import axios from 'axios'
import { LoginData } from '../Interfaces/LoginData'
import { Usuario } from '../Interfaces/Usuario'

//roteamento com backend C#
//Client

const apiClient = axios.create({
    baseURL: 'https://0wg95w0z-5165.brs.devtunnels.ms/api',
    headers: {
        'Content-Type': 'application/json' //API REST - header do postman
    }
})

export const LoginAPI = (loginData: LoginData) =>{
    return apiClient.post('/Login/login', loginData)
}
//requisição via post para criptografar dados importantes (ssl)

export const CriarUsuario = (dadosUsuario: Usuario) => {
    return apiClient.post('UserController/AddUser', dadosUsuario)
}
//rota não autenticada
//resposta o corpo de confirmação pra gravar no banco

export const AtualizarUsuario = (dadosUsuario: Usuario) => {
    return apiClient.put('UserController/UpdateUser', dadosUsuario)
}

export const DeletarUsuario = (id: string) => {
    return apiClient.delete(`UserController/DeleteUser/${id}`)
}

export const ListarUsuarios = () =>{
    return apiClient.get('UserController/GetAll')
}