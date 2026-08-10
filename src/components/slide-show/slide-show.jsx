import axios from "axios";
import { useEffect, useRef, useState } from "react"


export function SlideShow(){

    const [recipe, setRecipe] = useState({id:0, name:null, image:null});

    let recipeId = useRef(1);

    function LoadData(id){
        axios.get(`https://dummyjson.com/recipes/${id}`)
        .then(response=>{
            setRecipe(response.data);
        })
    }

    function handleNextClick(){
        recipeId.current = recipeId.current + 1;
        LoadData(recipeId.current);
    }
     function handlePrevClick(){
        recipeId.current = recipeId.current - 1;
        LoadData(recipeId.current);
    }

    function handleSeekBarChange(e){
        recipeId.current = e.target.value;
        LoadData(recipeId.current);
    }

    useEffect(()=>{
        LoadData(1);
    },[])

    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card p-2 w-50 mt-3">
                <div className="card-header text-center">
                    {recipe.name} [{recipe.id}]
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handlePrevClick} className="btn btn-dark bi bi-chevron-left"></button>
                        </div>
                        <div className="col-10">
                            <img height="400" src={recipe.image} className="w-100" />
                            <div className="my-2">
                                <input type="range" onChange={handleSeekBarChange} value={recipeId.current} className="form-range" />
                            </div>
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right"></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-success bi bi-play"></button>
                    <button className="btn btn-warning bi bi-pause mx-2"></button>
                </div>
            </div>
        </div>
    )
}