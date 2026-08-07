import axios from "axios";
import { useEffect, useState } from "react"


export function KeyDemo(){

    const [regExp] = useState(/^(?=.*[A-Z])\w{4,15}$/);
    const [progressWidth, setProgressWidth] = useState({width:''});
    const [progressColor, setProgressColor] = useState('');
    const [msg, setMsg] = useState('');
    const [users, setUsers] = useState([{user_id:''}]);
    const [userMsg, setUserMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [pan, setPan] = useState('');

    function LoadUsers(){
        axios.get('users.json')
        .then(response=>{
            setUsers(response.data);
        })
    }

    useEffect(()=>{
         LoadUsers();
    },[])

    function VerifyPassword(e){
        if(e.target.value.match(regExp)){
            setProgressWidth({width:'100%'});
            setProgressColor('bg-success');
            setMsg('Strong Password');
        } else {
            if(e.target.value.length<4){
                setProgressWidth({width:'30%'});
                setProgressColor('bg-danger');
                setMsg('Poor');
            } else {
                setProgressWidth({width:'70%'});
                setProgressColor('bg-warning')
                setMsg('Weak Password');
            }
        }
    }

    function VerifyUser(e){
        for(var user of users){
            if(user.user_id===e.target.value){
                setUserMsg('User Id Taken - Try Another');
                setErrorClass('text-danger');
                break;
            } else {
                setUserMsg('User Id Available');
                setErrorClass('text-success');
            }
        }
    }

    function handleContextMenu(){
         document.oncontextmenu = function(){
             alert('Right Click not allowed');
             return false;
         }
    }

    function handlePanChange(e){
        setPan(e.target.value);
    }
    function handlePanBlur(){
        setPan(pan.toUpperCase());
    }

    return(
        <div onContextMenu={handleContextMenu} className="container-fluid p-3">
            <h3>Regiser</h3>
            <dl className="w-25">
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUser} className="form-control" /></dd>
                <dd className={errorClass}>{userMsg}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onKeyUp={VerifyPassword} className="form-control" />
                </dd>
                <dd className="progress">
                    <div style={progressWidth} className={`progress-bar ${progressColor} progress-bar-striped progress-bar-animated`}>
                            {msg}
                    </div>
                </dd>
                <dt>PAN Number</dt>
                <dd><input type="text" onBlur={handlePanBlur} onChange={handlePanChange} value={pan} className="form-control" /></dd>
            </dl>
        </div>
    )
}