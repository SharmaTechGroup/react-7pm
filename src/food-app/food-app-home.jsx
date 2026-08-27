import { Link, Outlet } from "react-router-dom";


export function FoodAppHome(){
    return(
        <div className="container">
            <h3>Food App Home</h3>
            <Link to="list">Get List</Link>
            <hr />
            <Outlet />
        </div>
    )
}