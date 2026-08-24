import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom"
import axios from "axios";


export function FakestoreResults(){

    let [params] = useSearchParams();
    const [products, setProducts] = useState([{id:0, title:null, image:null, description:null, category:null, price:0, rating:{rate:0, count:0}}]);


    function LoadProducts(){
        axios.get(`https://fakestoreapi.com/products/category/${params.get('searchstring')}`)
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{
        LoadProducts();
    },[])



    return(
        <div className="container-fluid">
            <h4>Results</h4>
            <div className="d-flex flex-wrap w-50">
                {
                    products.map(product=>
                        <div key={product.id} className="card m-2 p-2" style={{width:'100px'}}>
                            <img height="50" src={product.image} />
                            <div className="card-footer">
                                <Link to={`/details/${product.id}`}>Details</Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to="/search">Back to Search</Link>
        </div>
    )
}