import './../CSS/Cart.css'
import React from "react";



export default function Cart({ isActive, cart, deleteOne }) {

    return (
     <>
        <div  className={isActive ? "showElement" : "hideElement"}>
           
                {cart.map(
                    (prod, idx) => 
                        <div class="itemCart"> 
                        
                            <img src={`../images/LateralEsq/${prod.resourceImg}`} class="imgProdCart"></img>
                            <p class="nameText"> {prod.nameProd}</p>
                            <p class="priceProduct"> {prod.price}  </p>
                            <button  onClick={() => deleteOne(idx)}><i class="fas fa-times"></i></button>
                        </div>    
                )}
           <button></button>
        </div>
       </>
    );
}