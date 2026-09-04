import { useCallback } from "react";
import { Link } from "react-router-dom";


export function FoodAppIndex(){


    const Calculate = useCallback(()=>{

         for(var i=1; i<=100000; i++){
             console.log(i);
         }

    },[])

    

    function handleCalculate(){
        Calculate();
    }
    function handleCompute(){
        Calculate();
    }

    return(
        <div className="container">
            <h3>Food App</h3>
            <button onClick={handleCalculate}>Calculate</button>
            <button onClick={handleCompute}>Compute</button>
            <Link to="/home">Home</Link>
        </div>
    )
}