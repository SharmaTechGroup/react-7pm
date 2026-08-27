import { Link } from "react-router-dom";


export function FoodAppIndex(){
    return(
        <div className="container">
            <h3>Food App</h3>
            <Link to="/home">Home</Link>
        </div>
    )
}