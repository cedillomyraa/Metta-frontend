import'./product.css';
import QuantityPicker from './quantityPicker';
import { useState } from 'react';


const Product = (props) => {

    const [quantity,setQuantity] = useState(1);    

    const onQuantityChange = (value) =>{
            console.log("Quantity Change!", value);

    };

    return(<div className='product'>
            <h2>{props.title} </h2>
            <img src={"/image/"+props.data.image} alt="product img" />
            <h3 className='price'> $ {props.data.price}  </h3>
            <h3 className='total'> $ {props.data.total}  </h3>
            <p className='color'> Color: {props.data.color}  </p>
            <p className='stock'> Only {props.data.stock} left  </p>
            <p className='category'> Shop: {props.data.category}  </p>
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button id='add'>Add to Bag</button>
           </div>);
};

export default Product;