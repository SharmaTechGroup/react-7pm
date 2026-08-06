import { useState } from "react"


export function EventDemo(){

    const [uname, setUname] = useState('John');
    
    function NameChange(e){
        setUname(e.target.value);
    }

    return(
        <div className="container-fluid">
            <input type="text" value={uname} onChange={NameChange} />
            <p> Hello ! {uname} </p>
        </div>
    )
}