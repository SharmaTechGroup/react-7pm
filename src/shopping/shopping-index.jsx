import { createContext, useEffect, useState } from "react";
import { ShoppingProducts } from "./shopping-products";
import axios from "axios";

export let CategoryContext = createContext(null)

export function ShoppingIndex(){


    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState('all');
    const [cartitems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
    },[])

    function handleCategoryChange(e){
        if(e.target.value===""){
            setCategoryName('all');
        } else {
            setCategoryName(e.target.value);
        }
    }
    function GetCount(){
        setCartCount(cartitems.length);
    }
   
    function GetProductId(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            var product = cartitems.find(item=> item.id===response.data.id);
            if(product){
                alert(`${product.title}\nExists in your cart`);
            } else {
                cartitems.push(response.data);
                alert(`${response.data.title}\nAdded to Cart`);
                GetCount();

            }
            
        })
    }

    return(
        <div className="container-fluid">
            <header className="d-flex flex-row align-items-center justify-content-between p-4 border border-1">
                <div className="fw-bold fs-4">
                    <span className="bi bi-bag-fill"> Shopping</span>
                </div>
                <div>
                    <div className="input-group">
                        <input type="text" onChange={handleCategoryChange} placeholder="search brands, products" className="form-control" />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <div>
                    <button data-bs-toggle="offcanvas" data-bs-target="#cart" className="btn btn-warning bi bi-cart4 position-relative">
                        <span className="badge bg-danger rounded rounded-circle position-absolute ">{cartCount}</span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                            <h3>Your Cart Items</h3>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartitems.map(item=><tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td><img src={item.image} width="50" height="50" /></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>
            <section className="row">
                <nav className="col-2">
                    <div className="mt-3">
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {
                                    categories.map(category=><option value={category} key={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-10 p-5">
                    <CategoryContext value={categoryName}>
                        <ShoppingProducts onAddToCartClick={GetProductId} />
                    </CategoryContext>
                </main>
            </section>
        </div>
    )
}