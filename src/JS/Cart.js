import './../CSS/Cart.css'
import React from "react";

export default function Cart({ modalShow, setModalShow, isActive, cart, deleteOne, check }) {
    
    function SendOrder() {
        var email;
        email = sessionStorage.getItem("email")
        if (check != null) {
            fetch("https://localhost:44360/products/sendOrder", {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json" },
                body: {
                    "UserEmail":email,
                    "Products":JSON.stringify(cart)
                }
            })
            console.log(cart)     
            console.log(JSON.stringify(cart))    
        } else {
            setModalShow(true)
        }
    }                                                                                           

    return (
     <>
        <div  className={isActive ? "showElement" : "hideElement"}>
                {cart.map(
                    (prod, idx) => 
                        <div class="itemCart"> 
                            <img src={`../images/LateralEsq/${prod.resourceImg}`} class="imgProdCart" alt=""></img>
                            <p class="nameText"> {prod.nameProd}</p>
                            <p class="priceProduct"> {prod.price}€ </p>
                            <button  className="delete" onClick={() => deleteOne(idx)}><i class="fas fa-times"></i></button>
                        </div>    
                )}
           <button onClick={() => SendOrder()} className="finishOrder">Finish Order</button>
        </div>
       </>
    );
}