import { Link, Outlet } from "react-router-dom";
import { useFetchApi } from "../hooks/fetch-api";
import { useState } from "react";
import { useFilter } from "../hooks/filter-data";


export function FoodAppHome(){


     const [electronics] = useState(['Sony TV', 'Samsung TV', 'Samsung Mobile', 'Sony Speakers', 'Apple MacBook', 'Apple iPhone']);

     const [searchstring, setSearchString] = useState('');

     function handleSearchChange(e){
        setSearchString(e.target.value);
     }

     let filteredData = useFilter(searchstring, electronics);
 
    return(
        <div className="container">
            <h3>Food App Home</h3>
            <input type="text" onChange={handleSearchChange} placeholder="search products" />
            <ol>
                {
                    filteredData.map(item=><li key={item}>{item}</li>)
                }
            </ol>
            <Link to="list">Get List</Link>
            <hr />
            <Outlet />
        </div>
    )
}