import { useState } from "react";
import { Row } from "reactstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import ProductList from "./ProductList";


const ProductManager = (prosp) => {

    const {path, url} = useRouteMatch();

    const [products, setProducts] = useState([]);

    return (
        <>
            <Row>
                <h1>Product Manager</h1>
            </Row>
            <Router>
                <Switch>
                    <Route exact path={path}>
                        <ProductList products={products} setProducts={setProducts} />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default ProductManager;