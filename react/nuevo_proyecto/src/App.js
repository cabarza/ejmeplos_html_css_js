import logo from './logo.svg';
import './App.css';
import Swapi from './components/swapi/Swapi';
import LaHora from './components/LaHora/LaHora';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserContext from './context/context';
import { useState } from 'react';
import Vista1 from './components/contador/view/Vista1';
import Formulario from './components/formulario/Formulario';
import Header from './components/layout/Header';
import Main from './components/contador/view/Main';

function App() {

  const [time, setTime] = useState(new Date().toLocaleString());
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: ''
  })

  return (
    <UserContext.Provider value={{time, setTime, usuario, setUsuario}}>
      <Router>
        <Header></Header>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <LaHora></LaHora>
              <Vista1></Vista1>
            </Route>
            <Route path="/swapi">
              <Swapi></Swapi>
            </Route>
            <Route path="/vistas">
              <Main></Main>
            </Route>
            <Route path="/formulario">
              <Formulario></Formulario>
            </Route>
            <Route path="/formulario2/:name">
              <Formulario></Formulario>
            </Route>
            
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
