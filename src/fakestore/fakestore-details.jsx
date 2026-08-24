import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";


export function FakestoreDetails(){

    const [product, setProduct] = useState({id:0, title:null, description:null, category:null, price:0, image:null, rating:{rate:0, count:0}});

    let params = useParams();

    function LoadProduct(){
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }
    useEffect(()=>{
        LoadProduct();
    },[])

    return(
        <div className="container-fluid">
            <h4>Details</h4>
            <dl>
                <img height="200" width="200" src={product.image} />
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
            <Link to={`/products/${product.category}`}>Back to Products</Link>
        </div>
    )
}