import styled from "styled-components";
import EstilosGlobales from "./components/EstilosGlobales";

//utilizando styled component
//armamos un componente estilizado 
const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);  
  width: 100%;
  min-height: 100vh;
`

function App() {
  

  return (
    <>
      <FondoGradiente>
        <EstilosGlobales/>
      </FondoGradiente>
    </>
  )
}

export default App
