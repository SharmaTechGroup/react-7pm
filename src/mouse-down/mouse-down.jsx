import { useState } from 'react';
import './mouse-down.css';

export function MouseDown(){

    const [animations, setAnimations]= useState({animationName:'Spin', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    const [flag, setFlag] = useState({position:'', top:'', left:''});

    function handleMouseDown(){
        setAnimations({animationDuration:'1s', animationName:'Spin', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }
    function handleMouseUp(){
        setAnimations({animationDuration:'5s', animationName:'Spin', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }
    function handleMouseMove(e){
        setFlag({position:'fixed', top:e.clientY + 'px', left:e.clientX + 'px'});
    }

    return(
        <div onMouseMove={handleMouseMove} className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img  src="react.svg" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={animations} width="200" height="200" />
            <img src="flag.gif" style={flag} width="50" height="50" />
        </div>
    )
}