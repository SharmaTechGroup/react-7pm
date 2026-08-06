import axios from "axios";
import { useEffect, useState } from "react"

export function Fakestore(){

    const [products, setProducts] = useState([{id:0, title:'', price:0, image:'', category:'', description:'', rating:{rate:0, count:0}}]);
    const [categories, setCategories] = useState([]);

    function LoadProducts(){
        axios.get(`https://fakestoreapi.com/products`)
        .then(response=>{
            setProducts(response.data);
        })
    }
    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            setCategories(response.data);
        })
    }

    useEffect(()=>{

        LoadProducts();
        LoadCategories();

    })


    return(
        <div className="container-fluid">
            <header className="d-flex flex-row justify-content-between p-2 bg-light align-items-center">
                <span className="fw-bold fs-2 text-primary bi bi-bag-fill"> Shop Direct</span>
                <div>
                    <div className="input-group">
                        <button className="btn bi bi-search"></button>
                        <input type="text" placeholder="search: brands, titles" className="form-control" />
                    </div>
                </div>
                <div>
                    <span className="bi bi-cart"></span>
                    <span className="bi mx-3 bi-bell"></span>
                    <span className="bi bi-person-fill"></span>
                </div>
            </header>
            <main className="row mt-3">
                <nav className="col-2">
                    <div className="fw-bold text-primary fs-4">Welcome Back</div>
                    <div>Manage your shopping</div>
                    <ul className="list-group mt-4">
                        <li className="list-group-item list-group-item-warning"> <span className="bi bi-house-door-fill"></span> Home </li>
                        <li className="list-group-item my-4 list-group-item-dark"> <span className="bi bi-ticket-fill "></span> Categories </li>
                         <li className="list-group-item list-group-item-warning"> <span className="bi bi-gear-fill "></span> Settings </li>
                    </ul>
                </nav>
                <section className="col-10">
                    <div className="row">
                        <div className="col-3">
                            <div className="card p-2 m-2">
                                <div className="card-header d-flex justify-content-between">
                                    <span className="fw-bold">Filter</span>
                                    <span className="text-primary">Clear All</span>
                                </div>
                                <div className="card-body">
                                   <dl className="mt-2">
                                    <dt>Categories</dt>
                                    <dd className="mt-3">
                                        {
                                            categories.map(category=>
                                                <div key={category}><input type="checkbox" className="form-check-input" /> <label style={{fontSize:'12px'}}>{category.toUpperCase()}</label> </div>
                                            )
                                        }
                                        
                                      
                                    </dd>
                                    <dt>Top Brands</dt>
                                    <dd className="mt-3">
                                        <button className="btn btn-light w-100">Samsung</button>
                                        <button className="btn btn-light w-100 my-2">Lee Cooper</button>
                                    </dd>
                                   </dl>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">Shop</li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ul>
                            <div className="fw-bold fs-3">Explore Products</div>
                            <table className="table table-hover mt-2">
                                <thead>
                                    <tr>
                                        <th width="50">Title</th>
                                        <th>Preview</th>
                                        <th>Price</th>
                                        <th>Rating</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(product=> <tr key={product.id}>
                                            <td>{product.title.slice(0,20)}</td>
                                            <td><img width="50" height="50" src={product.image} /></td>
                                            <td>{product.price}</td>
                                            <td>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> </td>
                                            <td>
                                                <button className="btn btn-warning bi bi-pen-fill"></button>
                                                <button className="btn btn-danger bi bi-trash-fill mx-2"></button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}