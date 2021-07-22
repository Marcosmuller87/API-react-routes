import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Usuarios from "./components/Usuarios";
import Usuario from "./components/Usuario";

function App() {
  return (
    <Router>
      <Link to="/" className="nav-link">
        Lista de Empleados
      </Link>
      <Switch>
        <Route exact path="/">
          <Usuarios />
        </Route>
        <Route path="/usuario/:id">
          <Usuario></Usuario>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
