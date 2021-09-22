import { Container } from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import ProductManager from './components/products/ProductManager';
import RegisterForm from './components/register/RegisterForm';
import Login from './components/login/Login';
import { useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import io from 'socket.io-client';


function App() {
  const [user, setUser] = useState({});
  const [socket] = useState(io.connect("/"));

  useEffect(() => {
    if(sessionStorage.getItem('USER_DATA')) {
        const userData = JSON.parse(sessionStorage.getItem('USER_DATA'));
        setUser(userData);
        // history.push('/products/list');
    }
  }, []);

  return (
    <UserContext.Provider value={{user, setUser, socket}}>
      <Router>
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
