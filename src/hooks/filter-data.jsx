import { useEffect, useState } from "react";

export function useFilter(searchString, data){

    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{

        setFilteredData(data.filter(item=> item.toLowerCase().includes(searchString.toLowerCase())));

    },[searchString])

    return filteredData;

}