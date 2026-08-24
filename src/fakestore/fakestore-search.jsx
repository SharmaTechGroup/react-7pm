import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";


export function FakestoreSearch(){

   
    return(
        <div className="container-flud">
            <h4>Search</h4>
            <div className="w-25">
                <label className="form-label">Search Products</label>
                <form method="get" className="input-group" action="/results">
                    <input className="form-control" type="text" name="searchstring" placeholder="eg: electronics, jewelery" />
                    <button type="submit" className="btn btn-warning bi bi-search"></button>
                </form>
            </div>
            <Link to="/">Back to Home</Link>
        </div>
    )
}