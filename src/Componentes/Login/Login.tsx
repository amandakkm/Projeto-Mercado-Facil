import { useState } from "react"
import { LoginData } from "../../Interfaces/LoginData"
import {LoginAPI } from "../../Servicos/MercadoFacilAPI"

//aerofunction
const Login = () => {

    //monitorar o estado do componente
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: ''
    })

    //formmulario quando acionado vai chamar a função que faz a coisa acontecer
    //front é orientado a evento
    //funcao generica que pega o nome do campo e seta o valor da variavel
    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    //evento de clicando no botao de 'ok' ou 'login' ou 'entrar'
    //HTMLInputElement é um textarea ou textbox por padrão
    //HTMLFormElement é ligado a um formulario sendo acionado com dar um submit do form inteiro, etc...
    //assincrono
    const handleSubmit = async (event: React.MouseEventHandler<HTMLButtonElement> | any) =>{
        event.preventDefault();
        //comportamento de botão - previne cliques simultaneos - ele faz um await entre um acionamento e outro
        
        //https://axios-http.com/ptbr/docs/res_schema
        try{
            const response = await LoginAPI(loginData)
            if (response.data && response.status === 200){
                alert('Login realizado com sucesso')
                sessionStorage.setItem('token', response.data.token)
                const testeRecuperaDados = sessionStorage.getItem('token')
                console.log('Dado recuperado do session storage: '+testeRecuperaDados)
            }
            else {
                alert('Falha no login')
            }
        } catch(e){
            console.error('Falha no login')
        } 
    }

    return(
        <>
        <div className="LoginForm">
            <div className="LoginInputs">
                <form action="">
                    <div>
                        <input type="text" name="email" value={loginData.email} onChange={handleLogin}/>
                    </div>
                    <div>
                        <input type="password" name="password" value={loginData.password} onChange={handleLogin}/>
                    </div>
                    <button className="buttonMargin" onClick={handleSubmit}>Entrar</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login