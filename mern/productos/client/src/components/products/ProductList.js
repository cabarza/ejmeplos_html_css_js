import { useEffect } from "react";
import { Col, Row, Table } from "reactstrap";
import axios from 'axios';
import Swal from 'sweetalert2'; 

const ProductList = (props) => {
    useEffect(() => {
        axios.get('/api/products')
            .then(resp => {
                console.log('RESP', resp);
                props.setProducts(resp.data);
            }).catch(err => Swal.fire('Error getting products', 'Error getting the products list', 'error'));
    }, []);

    return (
        <Row>
            <Col xs={12}>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Brand</th>
                            <th>Manufacturer</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.products.map((p, i) => 
                            <tr key={i}>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.type}</td>
                                <td>{p.brand}</td>
                                <td>{p.manufacturer}</td>
                                <td>{p.stock}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default ProductList;