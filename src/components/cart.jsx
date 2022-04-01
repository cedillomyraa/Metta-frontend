import cart from "./cart.css"
import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productincart";

const Cart = () => {
    let {cart, addProdToCart} = useContext(store); //gets two or more elements from store

    return(
        <div className="Cart-page">
            <h1>Metta Clothing</h1>
            <h3>You like it wear it!!!</h3>
            <h4>Ready to checkout? You have {cart.length} items in your shopping cart</h4>

            <div className="products">
                {cart.map(prod => (               
                <ProductInCart key={prod._id}data={prod}></ProductInCart>))}
            </div>
        </div>
    )

};


export default Cart;