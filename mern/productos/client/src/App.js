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


function App() {
  return (
    <Router>
      <div>
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
        </div>
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
  );
}

export default App;
