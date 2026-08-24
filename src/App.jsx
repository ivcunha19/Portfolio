import Navbar from "./components/Navbar"
import Inicio from "./sections/Inicio"
import Sobre from "./sections/Sobre"
import SpaceBackground from "./components/SpaceBackground"
import Projetos from "./sections/Projetos"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Inicio></Inicio>
      <SpaceBackground></SpaceBackground>
      <Sobre></Sobre>
      <Projetos></Projetos>
    </>
  )
}

export default App
