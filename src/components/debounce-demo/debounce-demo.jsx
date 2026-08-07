import { useState } from "react"


export function DebounceDemo(){


    const [volume,setVolume] = useState(1);
    const [msg, setMsg] = useState('');

    function Level1(){
        setMsg('Volume 30% Increased');
        setVolume(30);
    }
    function Level2(){
        setMsg('Volume 70% Increased');
        setVolume(70);
    }
    function Level3(){
        setMsg('Volume Full');
        setVolume(100);
    }

    function handleVolumeClick(){
        setTimeout(Level1, 4000);
        setTimeout(Level2,10000);
        setTimeout(Level3, 15000);
    }

    return(
        <div className="container-fluid">
            <button onClick={handleVolumeClick} className="btn btn-primary bi bi-volume-up-fill mt-3"></button>
            <div className="w-50">
                <input type="range" className="form-range" value={volume} min={1} max={100} />
            </div>
            <p className="fw-bold fs-4">{msg}</p>
        </div>
    )
}