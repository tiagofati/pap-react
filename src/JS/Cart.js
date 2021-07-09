import './../CSS/Cart.css'
import React from "react";


export default function Cart({ isActive, cart }) {

    return (
     <>
        <div  className={isActive ? "showElement" : "hideElement"}>
           
                {cart.map(
                    prod => 
                        <div class="itemCart"> 
                            <img src={`../images/LateralEsq/${prod.resourceImg}`} class="imgProdCart"></img>
                            <p class="nameText"> {prod.nameProd}</p>
                            <p class="priceProduct"> {prod.price}  </p>
                        </div>
                    
                )}
           
        </div>
       </>
    );
}