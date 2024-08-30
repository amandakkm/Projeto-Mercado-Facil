import './App.css'
import Home from './Paginas/Home/Home'
import Cadastro from './Paginas/CadastroUsuario/CadastroUsuario'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//retorno de alguma coisa: uma pagina, um componente, um roteamento
//roteamento das paginas (nesta aula)

const App = () => {
  return(
    //roteador
    <Router> 
        <Routes> //coleção de rotas do app
          <Route path='/' element={<Home/>}></Route> //rota individual
          <Route path="/CadastroUsuarios" element={<Cadastro/>}></Route>
        </Routes> 
    </Router>
  )
}
export default App
