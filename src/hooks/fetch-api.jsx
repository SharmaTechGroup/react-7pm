import axios from "axios";
import { useEffect, useState } from "react";


export function useFetchApi(url){
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setData(response.data);
        })
    },[url])

    return data;
}