import { Container } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductManager from './components/products/ProductManager';
import RegisterForm from './components/register/RegisterForm';
import Login from './components/login/Login';
import { useState } from 'react';
import UserContext from './context/UserContext';


function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/products/list">Product Manager</Link>
              </li>
            </ul>
          </nav>
          </div> */}
        <Container>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/register">
                <RegisterForm />
              </Route>
              <Route path="/products">
                <ProductManager/>  
              </Route>
            </Switch>  
        </Container>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
