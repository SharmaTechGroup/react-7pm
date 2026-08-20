import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "./shopping-index"
import axios from "axios";



export function ShoppingProducts({onAddToCartClick}){

   
    let categoryContext = useContext(CategoryContext);

    const [products, setProducts] = useState([{id:0, title:null, price:0, category:null, description:null, image:null, rating:{rate:0, count:0}}]);

    function LoadProducts(){
        if(categoryContext==='all'){
            axios.get(`https://fakestoreapi.com/products`)
            .then(response=>{
                setProducts(response.data);
            })
        } else {
             axios.get(`https://fakestoreapi.com/products/category/${categoryContext}`)
            .then(response=>{
                setProducts(response.data);
            })
        }
    }

    useEffect(()=>{
        LoadProducts();
    },[categoryContext])

    function handleAddClick(id){
        onAddToCartClick(id);
    }

    return(
        <div className="d-flex align-items-baseline flex-wrap overflow-auto" style={{height:'500px'}}>
            {
                products.map(product=>
                <div key={product.id} style={{width:'200px'}} className="card m-2 p-2">
                    <img className="card-img-top" src={product.image} height="100" />
                    <div className="card-header overflow-auto" style={{height:'100px'}}>
                        {product.title}
                    </div>
                    <div className="card-footer">
                        <button onClick={()=>{handleAddClick(product.id)}} className="btn btn-warning w-100 bi bi-cart-4"> Add to Cart</button>
                    </div>
                </div>)
            }
        </div>
    )
}