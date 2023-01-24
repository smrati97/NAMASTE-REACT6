import { useState } from "react";
import { restrauList } from "../Config";
import RestuarentCard from "./RestuarentCard";
const Body = () =>{
   // let searchTxt="KFC";
   const [searchText, setSearchText] = useState('KFC');
   const [val, setVal] = useState("false");
    return(
    <>
    <div className="searchbox-container">
    <input type="text" className="searchbox" placeholder="enter text here" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    <button className="button" onClick={
        
        ()=>{
        if(val === "true"){
            setVal("false")
        }else{
            setVal("true")
        }
        } }>Search</button>
    </div>
    <h1>{searchText}</h1>
    <h3>{val}</h3>
    
    <div className="res">
     {
         restrauList.map((restaurant) =>{
             return <RestuarentCard key={restaurant.data.id} {...restaurant.data}/>
         })
     }
    
    </div>
   
    </>
    )
 }

 export default Body;