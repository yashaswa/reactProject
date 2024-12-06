import { useState,useContext } from "react";
import {LOGO_URL} from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
const Header =()=>{
const onlineStatus = useOnlineStatus();
const [btnName,setBtnName] = useState("Login");
const {loggedInUser} = useContext(UserContext);


    return (<div className="flex justify-between  bg-neutral-200 shadow-lg m-2"  >
        <div  className="logo-container">
            <img className="w-48" src={LOGO_URL}/>
             </div>

            <div className="flex items-center ">
                <ul className="flex p-5 m-4">
                    <li className="  m-6 ">  { onlineStatus?" Online :✅":"Offline :🔴"}</li>
                    
                    <li className="px-7 py-2 rounded-md bg-zinc-300 m-5 hover:bg-zinc-500 hover:scale-110"><Link to="/"> Home </Link> </li>
                    <li className="px-7 py-2 rounded-md bg-zinc-300 m-5 hover:bg-zinc-500 hover:scale-110"> <Link to="/about"> About Us </Link>  </li>
                    <li className="px-7 py-2 rounded-md bg-zinc-300 m-5 hover:bg-zinc-500 hover:scale-110"> <Link to="/grocery"> grocery </Link>  </li>
                       
                        
                    <li className="px-7 py-2 rounded-md bg-zinc-300 m-5 hover:bg-zinc-500 hover:scale-110"> <a href="/contact"> Contact Us </a></li>
                    <li className="px-7 py-2 rounded-md bg-zinc-300  m-5 hover:bg-zinc-500 hover:scale-110">Cart</li>
                    <button className=" px-7 py-2 rounded-md  m-5 bg-blue-500 hover:bg-blue-600 hover:scale-110" onClick={()=>{
                       return btnName === "Login"  ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                    <li className="px-7 py-2 m-5 font-semibold">{loggedInUser}</li>
                </ul>
            </div>
    </div>)
};

export default  Header;