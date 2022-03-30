import { createContext } from "react";


//this is the data/functions that will be shared between components(the promise)
const store = createContext({
    cart: [], 
    user:{},

    //these functions will allow you to modify 
    addProdToCart:()=>{},
    removeProdFromCart:()=>{},
});

export default store;

