import Navbar from "./components/Navbar"
import Inicio from "./sections/Inicio"
import Sobre from "./sections/Sobre"
import SpaceBackground from "./components/SpaceBackground"
import Projetos from "./sections/Projetos"
import Experiencias from "./sections/Experiencias"
import Contato from "./sections/Contato"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Inicio></Inicio>
      <SpaceBackground></SpaceBackground>
      <Sobre></Sobre>
      <Projetos></Projetos>
      <Experiencias></Experiencias>
      <Contato></Contato>
      <Footer></Footer>
    </>
  )
}

export default App

