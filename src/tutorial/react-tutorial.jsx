import { useParams } from "react-router-dom"


export function ReactTutorial(){


    let obj = useParams();

    return(
        <div>
            <h3>React Tutorial</h3>
            <dl>
                <dt>Topic</dt>
                <dd>{obj.topic}</dd>
                <dt>Sub Topic</dt>
                <dd>{obj.subtopic}</dd>
            </dl>
        </div>
    )
}