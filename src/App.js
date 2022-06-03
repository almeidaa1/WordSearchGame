import PaginaInicial from "./Componentes/pagina-inicial.component";
import Modos from "./Componentes/modos.component";
import PreVisualizarModos from "./Componentes/pre-visualiza-modo.component";
import "./Componentes/styles.css";

function App() {
  return (
    <div className="app">
      <PaginaInicial className="pagina-inicial" />
      <Modos className="modos" />
      <PreVisualizarModos className="pre-visualizacao"/>
    </div>
  );
}
export default App;
