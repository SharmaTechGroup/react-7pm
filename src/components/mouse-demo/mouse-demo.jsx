import axios from "axios";
import { useEffect, useState } from "react"
import './mouse-demo.css';

export function MouseDemo(){

    const [products, setProducts] = useState([{id:0, image:''}]);
    const [preview, setPreview] = useState('');

    function LoadProducts(){
        axios.get(`https://fakestoreapi.com/products/category/jewelery`)
        .then(response=>{
             setProducts(response.data);
             setPreview(response.data[0].image);
        })
    }
    useEffect(()=>{
        LoadProducts();
    },[])

    function handleMouseOver(e){
        setPreview(e.target.src);
    }

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    {
                        products.map(product=>
                            <div key={product.id} className="my-4 border-style">
                                <img onMouseOver={handleMouseOver} src={product.image} width="50" height="50"/>
                            </div>
                        )
                    }
                </div>
                <div className="col-10">
                    <img  width="400" src={preview} height="400" className="mt-4" />
                </div>
            </div>
        </div>
    )
}