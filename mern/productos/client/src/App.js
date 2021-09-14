import { Container } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductManager from './components/products/ProductManager';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product Manager</Link>
            </li>
          </ul>
        </nav>
        </div>
      <Container>
          <Switch>
            <Route path="/products">
              <ProductManager/>  
            </Route>  
          </Switch>  
      </Container>
    </Router>    
  );
}

export default App;
