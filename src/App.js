import PaginaInicial from "./Componentes/pagina-inicial.component";
import Modos from "./Componentes/modos.component";
import PaginaJogo from "./Componentes/pagina-jogo-components/pagina-jogo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./estilos/styles.css";
import "./estilos/sopaLetras.css";

function App() {
  let modo;

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <PaginaInicial className="pagina-inicial" />
          </Route>
          <Route path="/modos">
            <Modos modo={modo} />
          </Route>
          <Route>
            <PaginaJogo className="jogo" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

// SELECIONAR A PALAVRA ARRASTANDO (react onDrag events)
