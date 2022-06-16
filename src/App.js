import PaginaInicial from "./Componentes/pagina-inicial.component";
import useModos from "./Componentes/modos.component";
import PaginaJogo from "./Componentes/pagina-jogo-components/pagina-jogo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./estilos/styles.css";
import "./estilos/sopaLetras.css";

function App() {
  const { render, rowsColumns, numberOfWords, timer } = useModos();

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <PaginaInicial className="pagina-inicial" />
          </Route>
          <Route path="/modos">{render}</Route>
          <Route path="/Sopa-Letras">
            <PaginaJogo
              className="jogo"
              {...{ rowsColumns, numberOfWords, timer }}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

// SELECIONAR A PALAVRA ARRASTANDO (react onDrag events)
