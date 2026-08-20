import { createContext, useContext, useState } from "react"

let UserContext = createContext(null);

export function Level2(){

    let data = useContext(UserContext);

    return(
        <div className="container p-5 bg-warning">
            <h4> Level-2 Hello ! {data} </h4>
        </div>
    )
}


export function Level1({onLevel1Click}){

    let data = useContext(UserContext);

    function handleClick(){
        onLevel1Click({title:'Hello', age: 22});
    }

    return(
        <div className="container p-5 bg-dark text-white">
            <h4>Level-1  Hello ! {data}   </h4>
            <button onClick={handleClick} className="btn btn-success mb-2">Send Data to Parent</button>
            <Level2 />
        </div>
    )
}


export function ContextDemo(){

    const [username, setUserName] = useState('');
    const [msg, setMsg] = useState('');

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleChild(e){    
        setMsg(e.title);
    }

    return(
        <div className="container-fluid bg-danger text-white p-5">
            <h2>Parent <input onChange={handleNameChange} type="text" placeholder="user name" /> </h2>
            <p>Hello ! {username}</p>
            <p>{msg}</p>
            <UserContext value={username}>

                <Level1 onLevel1Click={handleChild} />

            </UserContext>
        </div>
    )
}