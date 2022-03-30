import store from "./storeContext";
import { useState } from 'react';


const GlobalState =(props) =>{
    const [cart, setCart] = useState([]);
    const [loggedInUser, setloggedInUser] = useState([]);
    

        const addProdToCart = (prod) => {
            console.log("adding prod to state");
            let copy= [...cart];
            copy.push(prod);
            setCart(copy);
        };
        const removeProdFromCart= () => {
            console.log("removing prod to state");
        };
    return (
        //wrapper component
        <store.Provider value={{
            cart:cart,
            user: loggedInUser,
            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
        }}>
            {props.children}
        </store.Provider>
    );
}

export default GlobalState;