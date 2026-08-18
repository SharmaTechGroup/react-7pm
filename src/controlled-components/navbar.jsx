
export function Navbar(props){
    if(props.layout==='sidebar'){
        return(
            <nav style={{width:'250px', height:'100vh'}} className={`d-flex flex-column p-2 justify-content-between border border-2 shadow shadow-lg`}>
                <div className="fw-bold fs-3">
                   <span className={props.brandLogo}></span> 
                   <span className="fw-bold"> {props.brandName} </span>
                </div>
                <div>
                   <ul className="list-group">
                    {
                        props.menuItems.map(item=> <li key={item} className="list-group-item list-group-item-dark my-3"> {item.toUpperCase()} </li>)
                    }
                   </ul>
                </div>
                <div>
                    <label className="form-label fw-bold">Search</label>
                    <div>
                        <div className="input-group">
                        <input type="text" placeholder={props.searchString} className="form-control"/>
                        <button className="btn btn-warning bi bi-search"></button>
                        </div>
                    </div>
                </div>
                <div>
                   <button className={`btn ${(props.theme==='bg-danger text-white')?'btn-light':'btn-warning'} bi w-100 bi-person-circle`}> Signin</button> 
                </div>
            </nav>
        )
    } else {
        return(
        <nav className={`d-flex flex-row ${props.theme} p-2 align-items-center my-2 justify-content-between border border-1`}>
            <div>
                <span className={props.brandLogo}></span>
                <span className="fw-bold"> {props.brandName} </span>
            </div>
            <div>
                {
                    props.menuItems.map(item=><span className="mx-4" key={item}>{item.toUpperCase()}</span>)
                }
            </div>
            <div>
                <div className="input-group">
                    <input type="text" placeholder={props.searchString} className="form-control"/>
                    <button className="btn btn-warning bi bi-search"></button>
                </div>
            </div>
            <div>
                <button className={`btn ${(props.theme==='bg-danger text-white')?'btn-light':'btn-warning'} bi bi-person-circle`}> Signin</button>
            </div>
        </nav>
    )
    }
}