import PaginaInicial from "./Componentes/pagina-inicial.component";
import Modos from "./Componentes/modos.component";
import PreVisualizarModos from "./Componentes/pre-visualiza-modo.component";
import SopaLetras from "./Componentes/sopa-letras";

import "./estilos/styles.css";
import "./estilos/sopaLetras.css";

function App() {
  return (
    <div className="app">
      {/* <PaginaInicial className="pagina-inicial" />
      <Modos className="modos" />
      <PreVisualizarModos className="pre-visualizacao" /> */}
      <SopaLetras className="sopa-letras" />
    </div>
  );
}
export default App;

// SELECIONAR A PALAVRA ARRASTANDO (react onDrag events)
