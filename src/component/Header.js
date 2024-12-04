import { useState } from "react";
import {LOGO_URL} from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlinStatus";
const Header =()=>{
const onlineStatus = useOnlineStatus();
const [btnName,setBtnName] = useState("Login");



    return (<div className="header">
        <div  className="logo-container">
            <img className="logo" src={LOGO_URL}/>
             </div>

            <div className="nav-items">
                <ul>
                    <li>  { onlineStatus?" Online :✅":"Offilne :🔴"}</li>
                    <li><Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About Us </Link>  </li>

                       
                        
                    <li> <a href="/contact"> Contact Us </a></li>
                    <li>Cart</li>
                    <button className="login-button" onClick={()=>{
                       return btnName === "Login"  ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
    </div>)
};

export default  Header;