import { useState } from "react";
import { IMG_URL } from "../Config";

const Title = () =>{
    return (
    <a href="/">
    <img className="logo" src={IMG_URL} alt="logo"/>
    </a>
    )}

const Header = () => {
   // const [title,setTitle] = useState("old title");
    const [isLogged, setIsLogged] = useState(false);
        return (
        
        <div className="header">
            <Title/>
          { /* <h1>{title}</h1>
            <button onClick= {()=>{if(title==="old title"){
                setTitle("New title")
                }else{setTitle("old title")}}}>Click</button>*/}
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {!isLogged?  <button onClick={()=>setIsLogged(true)}>Logout</button> :  <button onClick={()=>setIsLogged(false)}>Login</button>}
          
           
        </div>
        )
}

export default Header;