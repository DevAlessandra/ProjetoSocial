import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./globalStyles.scss"
import PaginaInicial from "./pages/paginaInicial/PaginaInicial"
import Doacao from "./pages/doacao/Doacao"
import Voluntariado from "./pages/voluntariado/Voluntariado"
import Mentoria from "./pages/mentoria/mentoria"
import EventosEP from "./pages/eventosEP/eventosEP"
import Usuario from "./pages/usuario/Usuario"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./components/loginCopy/login";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/PaginaInicial" element={<PaginaInicial/>}/>
       <Route path="/doacao" element={<Doacao />}/>
        <Route path="/voluntariado" element={<Voluntariado />}/>
        <Route path="/mentoria" element={<Mentoria />}/>
        <Route path="/eventosEP" element={<EventosEP />}/>
         <Route path="/usuario" element={<Usuario />}/>
         <Route path="/cadastro" element={<Cadastro />}/>
     
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App