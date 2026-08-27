import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";



export default function FakestoreProducts(){

    let params = useParams();

    const [products, setProducts] = useState([{id:0, title:null, image:null, description:null, category:null, price:0, rating:{rate:0, count:0}}]);

    function LoadProducts(){
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{
        LoadProducts();
    },[])

    return(
        <div className="container-fluid">
            <h4>Products</h4>
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-wrap">
                        {
                            products.map(product=>
                                <div key={product.id} className="card m-2 p-2" style={{width:'100px'}}>
                                    <img height="50" src={product.image} />
                                    <div className="card-footer">
                                        <Link to={`details/${product.id}`}>Details</Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <Link to="/">Back to categories</Link>
                </div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}