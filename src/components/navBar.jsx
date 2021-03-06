import'./navBar.css';
import {Link} from "react-router-dom";
import store from '../context/storeContext';
import { useContext } from 'react';



const NavBar = () => {
  const cart = useContext(store).cart;

  const getNumber = ( ) => {
    let total = 0;  //sum all the quantity (s) in the array
    for (let i=0; i < cart.length; i++){
      let prod = cart[i];
      total += prod.quantity;
    }
    return total;  // and return the total
    
  }
     return(
    //<div className='navBar'>
//     <h2>This is the Nav Bar</h2>
//    </div>
  
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/#">Metta Clothing</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">Catalog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Admin</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <Link to = "/cart" className='btn btn-outline-light'>
          <span className='badge bg-primary'> {getNumber()} </span> My Cart
        </Link>
        </form>
    </div>
  </div>
</nav>
   
   );

};

export default NavBar;