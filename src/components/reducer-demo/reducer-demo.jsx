import { useReducer } from "react"


let initialState = {
    likes : 0,
    dislikes: 0
}

function reducer(state, action){
    switch(action.type){
         case "like": 
         return { likes : state.likes + 1  }
    }
}


export function ReducerDemo(){

    let [state, dispatch] = useReducer(reducer, initialState);

    function handleLikeClick(){
        dispatch({type: 'like'});
    }

    return(
        <div className="container-fluid">
            <iframe width="400" src="https://www.youtube.com/embed/1JLYaEiqzLc" height="300"></iframe>
            <div className="mt-2">
                <button onClick={handleLikeClick} className="btn bi bi-hand-thumbs-up"> {state.likes} Likes</button>

            </div>
        </div>
    )
}