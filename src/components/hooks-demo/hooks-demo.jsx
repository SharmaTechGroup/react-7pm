import { useActionState, useEffect, useInsertionEffect, useLayoutEffect, useState } from "react"
import { useActionData, useSearchParams } from "react-router-dom";

export function Login(){


    const [id] = useState(2);

    useEffect(()=>{
        console.log('Login Mounted');
        return()=>{
            console.log('Login Unmounted');
        }
    },[])

    useEffect(()=>{
        console.log('Mounts again when ID changes');
    },[id])

    return(
        <div>
            <h4>Login</h4>
        </div>
    )
}
export function Register(){


   

    useEffect(()=>{
        console.log('Use Effect');
        
    },[])

    useInsertionEffect(()=>{

         var style = document.createElement("style");
         style.innerHTML = `
            h4{
              color: red;
              border : 1px solid black;
              padding:  10px;
            }
         `;
         document.querySelector("head").appendChild(style);

         console.log('User Insertion Effects');

    },[])

     useLayoutEffect(()=>{

        console.log('Use Layout');

    },[])


    return(
        <div>
            <h4>Register</h4>
        </div>
    )
}


export function HooksDemo(){

    const [view, setView] = useState('');

    function LoginClick(){
        setView(<Login />);
    }
    function RegisterClick(){
        setView(<Register />);
    }

    return(
        <div className="container-fluid">
                <button onClick={LoginClick}>Login</button>
                <button onClick={RegisterClick}>Register</button>
                <hr />
                {
                    view
                }
        </div>
    )
}