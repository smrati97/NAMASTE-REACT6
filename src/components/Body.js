import { useEffect, useState } from "react";
import { restrauList } from "../Config";
import RestuarentCard from "./RestuarentCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restraunts){
    const fdata = restraunts.filter((restraunt) => restraunt.data.name.toLowerCase().includes(searchText.toLowerCase())
        
   );

   return fdata;
    
  }
const Body = () =>{
    
   // let searchTxt="KFC";
   const [searchText, setSearchText] = useState("");
   const [allRestraunts, setAllRestraunts] = useState([]);
   const [filteredRestraunts, setFilteredRestraunts] = useState([]);
   console.log("render")
   useEffect(()=>{
         getApiData();
         console.log("useEffect")
   },[])
   
   async function getApiData(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4210608&lng=80.3700484&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraunts(json?.data?.cards[2]?.data?.data?.cards);
    //setRestraunts(json);
   }

   if(!allRestraunts) return null;

   
    return (allRestraunts.length)===0 ? <Shimmer/> :(
        
    <>
    <div className="searchbox-container">
    <input type="text" className="searchbox" placeholder="enter text here" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    <button className="button" onClick={
        
        ()=>{
           
             const data = filterData(searchText, allRestraunts);
             setFilteredRestraunts(data);
             setSearchText('');
          
            
             
        } }>Search</button>

    </div>
    <h1>{searchText}</h1>
    
    
    <div className="restraunt-list">
        {
              (filteredRestraunts.length===0) ? <h1>No filtered restaurents........</h1> : filteredRestraunts.map((restaurant) =>{
                return <RestuarentCard key={restaurant.data.id} {...restaurant.data}/>
            })
        }

     
    
    </div>
   
    </>
    )
 }

 export default Body;