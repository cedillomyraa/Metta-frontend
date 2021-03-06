import "./home.css"
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div className="home-page">
            <div className="banner">
                <div className="store-name-text">
                    <h1>Metta Clothing</h1>
                    <h4>You like it wear it!!!</h4> 
                </div>
                <img src="/image/mettaImg.jpg" alt="" />
            </div>

            <div className="promo-img">
                <div className="link-btn">
                    <Link to ="/catalog" className="btn-info">Check out our new arrivals for the season</Link>
                </div>
                
                    <img className="coupon-img" src="/image/coupon.jpg" alt="" />

                <div className="img2">
                    <img src="/image/mettaImg2.jpg" alt="" />
                </div>
            </div>
        </div>
    )

};

export default Home;
