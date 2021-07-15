import { Row, Col } from "react-bootstrap";
import './../CSS/Products.css';
import Footer from './Footer.js';
import React, { useState, useEffect } from "react";

function Products() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://localhost:44360/products", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.json())

            .then(products => { setData(products); console.log(products); })

            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {

                setLoading(false);
            });
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";
    function getProductTable() {
        return data.map(
            product => <Col sm={3}>
                <a href={`productsDetails/${product.idProd}`} className="card">
                    <img src={`../images/LateralEsq/${product.resourceImg}`} className="imgOnCard" alt=""></img>
                    <p className="nameProds" > {product.nameProd} </p>
                    <p className="price"> {product.price} € </p>
                </a>
            </Col>
        )
    }
    return (
        <>
            <Row style={{ marginTop: "50px" }}>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Row>
                        {getProductTable()}           
                    </Row>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Footer />
        </>
    )
}
export default Products;