import styled from "styled-components";
import EstilosGlobales from "./components/EstilosGlobales";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

//utilizando styled component
//armamos un componente estilizado 
const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);  
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1800px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px ;
`
const ContenidoGaleria = styled.section`
    display: flex;
    flex-direction:column;
    flex-grow: 1;
`



function App() {

const [fotosGaleria, setFotosGaleria] = useState(fotos)
const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  return (
    <>
      <FondoGradiente>
        <EstilosGlobales />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner backgroundImage={banner} texto="La galeria más completa de fotos del espacio" />
              <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)} fotos={fotosGaleria} />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada}/>

      </FondoGradiente>
    </>
  )
}

export default App
