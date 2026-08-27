import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function FakestoreLogin(){


    const [user, setUser] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['uname']);
    const [users, setUsers] = useState([{user_id:null}]);

    let navigate = useNavigate();

    function LoadUsers(){
        axios.get(`users.json`)
        .then(response=>{
            setUsers(response.data);
        })
    }


    function handleNameChange(e){
        setUser(e.target.value);
    }

    function handleLoginClick(){
        var result = users.find(item=> item.user_id===user);
        if(result){
            setCookie('uname', user, { expires: new Date('2026-08-29') });
            navigate('/search');
        } else {
            alert(`${user} Not Found\nPlease register`);
        }
    }

    useEffect(()=>{
        LoadUsers();
    },[])

    return(
        <div className="container-fluid">
            <h4>Fakestore Login</h4>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange} /></dd>
            </dl>
            <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
            <br /> <br/>
            <Link to="/">Back to home</Link>
        </div>
    )
}