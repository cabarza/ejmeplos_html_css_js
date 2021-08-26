import logo from './logo.svg';
import './App.css';
import Swapi from './components/swapi/Swapi';
import LaHora from './components/LaHora/LaHora';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserContext from './context/context';
import { useState } from 'react';
import Vista1 from './components/contador/view/Vista1';
import Vista2 from './components/contador/view/Vista2';

function App() {

  const [time, setTime] = useState(new Date().toLocaleString());

  return (
    <UserContext.Provider value={{time, setTime}}>
      <Router>
        <div className="App">
        <Link to="/">Timer</Link>&nbsp;&nbsp; 
        <Link to="/swapi">Swapi</Link>&nbsp;&nbsp; 
        <Link to="/vista1">Vista1</Link>&nbsp;&nbsp; 
        <Link to="/vista2">Vista2</Link>
        <Switch>
          <Route exact path="/">
            <LaHora></LaHora>
          </Route>
          <Route path="/swapi">
            <Swapi></Swapi>
          </Route>
          <Route path="/vista1">
            <Vista1></Vista1>
          </Route>
          <Route path="/vista2">
            <Vista2></Vista2>
          </Route>
          
        </Switch>
      </div>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
