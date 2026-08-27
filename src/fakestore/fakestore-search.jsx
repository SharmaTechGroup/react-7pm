import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useSearchParams } from "react-router-dom";


export function FakestoreSearch(){

    const [cookies, setCookie, removeCookie] = useCookies(['uname']);

    let navigate = useNavigate();

    useEffect(()=>{
         
        if(!cookies['uname']){
            navigate('/login');
        }

    },[cookies])

    function handleSignout(){
        removeCookie('uname');
        navigate('/login');
    }
   
    return(
        <div className="container-flud">
            <h4 className="d-flex justify-content-between"> <span>{cookies['uname']}</span>   Search  <button onClick={handleSignout} className="btn btn-danger">Signout</button> </h4>
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