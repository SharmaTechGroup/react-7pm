import { useEffect, useState } from "react"
import { Login } from "../login/login";
import { FormikDemo } from "../formik-demo/formik-demo";


export function ConditionDemo(){

    const [username, setUserName] = useState('');

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleSigninClick(){
        sessionStorage.setItem('uname', username);
        location.reload();
    }
    function handleSignout(){
        sessionStorage.removeItem('uname');
        location.reload();
    }

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-3 bg-light">
                <div className="fs-4 fw-bold">Amazon</div>
                <div>
                   {
                     (sessionStorage.getItem('uname')===null)?
                     <div className="input-group">
                     <input className="form-control" onChange={handleNameChange} type="text" placeholder="User Name" />
                     <button onClick={handleSigninClick} className="btn btn-danger">Signin</button>
                     </div>
                     :
                     <div>
                     <span className="mx-2 bi bi-person-fill">{sessionStorage.getItem('uname')}</span>
                     <button onClick={handleSignout} className="btn btn-warning">Signout</button>
                    </div>
                   }
                   
                   
                </div>
            </header>
        </div>
    )
}