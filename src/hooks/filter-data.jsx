import {  useMemo } from "react";

export function useFilter(searchString, data){

    let filteredData = useMemo(()=>{

       return data.filter(item=> item.toLowerCase().includes(searchString.toLowerCase()))

    },[searchString])

    return filteredData;

}