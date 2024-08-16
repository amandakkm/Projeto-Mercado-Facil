import './App.css'
import Home from './Paginas/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//retorno de alguma coisa: uma pagina, um componente, um roteamento
//roteamento das paginas (nesta aula)

const App = () => {
  return(
    //roteador
    <Router> 
        <Routes> //coleção de rotas do app
          <Route path='/' element={<Home/>}></Route> //rota individual
        </Routes> 
    </Router>
  )
}
export default App
