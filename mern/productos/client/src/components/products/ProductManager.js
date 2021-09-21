import { useState } from "react";
import { Row, Col } from "reactstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import ProductList from "./ProductList";
import {BsFillPlusCircleFill} from 'react-icons/bs';
import ProductForm from "./ProductForm";

const ProductManager = (prosp) => {

    const {path, url} = useRouteMatch();

    const [products, setProducts] = useState([]);

    return (
        <>
            <Router>
                <Row>
                    <Col xs={10}>
                        <h1>Product Manager</h1>
                    </Col>
                    <Col xs={2}>
                        <Link to={`${url}/new`}>
                            <BsFillPlusCircleFill></BsFillPlusCircleFill>
                        </Link>
                    </Col>
                </Row>
                <Switch>
                    <Route exact path={`${path}/list`}>
                        <ProductList products={products} setProducts={setProducts} />
                    </Route>
                    <Route path={`${path}/new`}>
                        <ProductForm new={true}/>
                    </Route>
                    <Route path={`${path}/edit/:id`}>
                        <ProductForm edit={true}/>
                    </Route>
                    <Route path={`${path}/view/:id`}>
                        <ProductForm view={true}/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default ProductManager;