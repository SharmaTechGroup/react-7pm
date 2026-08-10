import { useEffect, useRef, useState } from "react"


export function ThrottleDemo(){


     const [ms, setMs] = useState(0);
     const [sec, setSec] = useState(0);
     const [min, setMin] = useState(0);
     const [hrs, setHrs] = useState(0);

     let msRef = useRef(0);
     let secRef = useRef(0);
     let minRef = useRef(0);

     let WatchTask = useRef(null);

     function StopClock(){
         msRef.current = msRef.current + 1;
         setMs(msRef.current);
         if(msRef.current===999){
              msRef.current = 0;
              secRef.current = secRef.current + 1;
              setSec(secRef.current);
              if(secRef.current===59){
                  secRef.current = 0;
                  minRef.current = minRef.current + 1;
                  setMin(minRef.current);
              }
         }
     }

     function handleStartClick(){
        WatchTask.current = setInterval(StopClock,1);
     }

     function handleStopClick(){
        clearInterval(WatchTask.current);
     }


    useEffect(()=>{
        
    },[])

    return(
        <div className="container-fluid d-flex justify-content-center">
           <div>
             <div style={{width:'800px'}} className="row text-center mt-4 border fs-1 fw-bold border-1 border-dark">
                <div className="col-1">
                    00
                </div>
                 <div className="col-1">
                    :
                </div>
                 <div className="col-1">
                    {min}
                </div>
                 <div className="col-1">
                    :
                </div>
                 <div className="col-1">
                    {sec}
                </div>
                 <div className="col-1">
                    :
                </div>
                 <div className="col-1">
                    {ms}
                </div>
            </div>
            <div className="mt-3">
                <button onClick={handleStartClick} className="btn btn-primary">Start</button>
                <button className="btn  mx-2 btn-danger" onClick={handleStopClick}>Stop</button>
            </div>
           </div>
        </div>
    )
}