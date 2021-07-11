import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Footer from './Footer.js';
import './../CSS/ProductsDetails.css';


function ProductsDetails({props, addToCart} ) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectSize, setSelectSize] = useState(35);
    const [selectedImg, setSelectedImg] = useState('LateralEsq');
    const [selectedImgBorder, setSelectedImgBorder] = useState(1);

    const product = {
        idProd: "",
        nameProd : "",
        price: 1,
        resourceImg: "",
        size: 2.00,
        
    };

    useEffect(() => {
        fetch(`https://localhost:44360/products/${props.match.params.idProd}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.json())

            .then(products => {
                setData(products);
                setSelectSize(products.availableSizes[0])
                console.log(products);
            })

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

    function getSizes() {
        var sizes = []

        for (var i = 35; i < 50; i += 0.5) {
            sizes.push(i)
        }

        return sizes.map(size => {
            var className = "unavailableSize";
            var sizeExists = data.availableSizes.includes(size)

            if (sizeExists) {
                if (selectSize == size) {
                    className = "selectSize"
                } else {
                    className = "sizes"
                }
            }
            return <div
                id={size}
                className={className}
                onClick={(event) => { if (sizeExists) setSelectSize(event.target.id) }}

            >{size}</div>

        })
    }
    function addObject() {

        product.idProd = data.idProd;
        product.nameProd = data.nameProd;
        product.price = data.price;
        product.resourceImg = data.resourceImg;
        product.size = selectSize;

        console.log(product.size)
        addToCart(product);
    }
    
    return (
        <>
            
            <Row style={{ marginTop: "50px" }}>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Row style={{ height: "650px", marginBottom:"100px"}}>
                        <Col sm={8} style={{ border: "solid black 1px" }}>
                            <img src={`../images/${selectedImg}/${data.resourceImg}`} className="mainImg"></img>
                            <div className="presImg">
                                <img
                                    src={`../images/LateralEsq/${data.resourceImg}`}
                                    className={selectedImgBorder == 1 ? 'presImgs' : 'unselectedImg'}
                                    onClick={() => { setSelectedImg('LateralEsq'); setSelectedImgBorder(1) }}>
                                </img>
                                <img
                                    src={`../images/LateralDta/${data.resourceImg}`}
                                    className={selectedImgBorder == 2 ? 'presImgs' : 'unselectedImg'}
                                    onClick={() => { setSelectedImg('LateralDta'); setSelectedImgBorder(2) }}>
                                </img>
                                <img
                                    src={`../images/Cima/${data.resourceImg}`}
                                    className={selectedImgBorder == 3 ? 'presImgs' : 'unselectedImg'}
                                    onClick={() => { setSelectedImg('Cima'); setSelectedImgBorder(3) }}>
                                </img>
                                <img
                                    src={`../images/Baixo/${data.resourceImg}`}
                                    className={selectedImgBorder == 4 ? 'presImgs' : 'unselectedImg'}
                                    onClick={() => { setSelectedImg('Baixo'); setSelectedImgBorder(4) }}>
                                </img>
                                <img
                                    src={`../images/Frente/${data.resourceImg}`}
                                    className={selectedImgBorder == 5 ? 'presImgs' : 'unselectedImg'}
                                    onClick={() => { setSelectedImg('Frente'); setSelectedImgBorder(5) }}>
                                </img>
                                <img
                                    src={`../images/Atrás/${data.resourceImg}`}
                                    className={selectedImgBorder == 6 ? 'presImgs' : 'unselectedImg'}
                                    onClick={() => { setSelectedImg('Atrás'); setSelectedImgBorder(6) }}>
                                </img>
                            </div>
                        </Col>
                        <Col sm={4} style={{ border: "solid black 1px" }}>
                            <p className="nameProd"> {data.nameProd}</p>
                            <p className="priceProd"> {data.price}€ </p>
                            <div className="gridSizes">
                                {getSizes()}
                            </div>
                            <button className="addCart" onClick={() => addObject()}>Add to Cart</button>
                        </Col>
                    </Row>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Footer />
        </>
    )
}
export default ProductsDetails;

