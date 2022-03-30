import'./admin.css';
import {useState} from "react";
import DataService from "../services/dataService";
//component below

const Admin = () => {
    //state variable to save info
    const [prod, setProd] = useState({});
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons]= useState([]);
    const [allProds,setAllProds]= useState([]);

    const handleInputChange = (e)=> {
        //pattern to follow if an object or array
        var copy ={...prod};
        copy[e.target.name] = e.target.value;
        setProd(copy);
    };

    const handleInputCoupon = (e)=> {
        var copy ={...coupon};
        copy[e.target.name] = e.target.value;
        setCoupon(copy);
    };
    const saveProduct =() =>{
        console.log(prod);

        let service = new DataService();
        service.saveProduct(prod);

        let copy = [...allProds];
        copy.push(prod);
        setAllProds(copy);
    };

    const saveCoupon = ()=>{
        console.log(coupon);
        let service = new DataService();
        service.saveCoupon(coupon);

        let copy= [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    };

    

    return(
        <div className='admin'>
            <section>
                <h3>Register New Items</h3>
                
                <div className='form'>
                    <div className='my-form'>
                        <label>Title:</label>
                        <input onChange={handleInputChange} name = "title" type="text" />
                    </div>
        
                    <div className='my-form'>
                        <label>Image:</label>
                        <input onChange={handleInputChange} name = "image" type="text" />
                    </div>
        
                    <div className='my-form'>
                        <label>Category:</label>
                        <input onChange={handleInputChange} name = "category" type="text" />
                    </div>
        
                    <div className='my-form'>
                        <label>Price:</label>
                        <input onChange={handleInputChange} name = "price" type="text" />
                    </div>
        
                    <div className='my-form'>
                        <button onClick={saveProduct} className='btn-save-item'>Save</button>
                    </div>
                </div>

                <div className='new-item'>
                    {allProds.map((prod, index) => (
                        <div key={index}>
                            <label>{prod.title}</label>-<label>{prod.price}</label>
                        </div>
                    ))}
                </div>
            </section>
        
            <section>
                <h3>Coupon Codes</h3>

                <div className='coupon-form'>
                    <label>Code:</label>
                    <input onChange={handleInputCoupon} name = "code" type="text" />
                </div>
                <div className='coupon-form'>
                    <label>Discount:</label>
                    <input onChange={handleInputCoupon} name = "discount" type="text" />
                </div>
                
                <div className='coupon-form'>
                    <button onClick={saveCoupon} className='btn-save-coupon'>Save</button>
                </div>

                <div className='coupon-list'>
                    {allCoupons.map((coupon, index) => (
                        <div key={index}>
                            <label>{coupon.code}</label>-<label>{coupon.discount}</label>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};


export default Admin;