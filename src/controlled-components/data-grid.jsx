

export function DataGrid(props){
     return(
        <table className={`table table-hover caption-top`}>
            <caption>{props.caption}</caption>
            <thead>
               <tr>
                 {
                    Object.keys(props.data[0]).map(key=><th key={key}> 
                       <div className="dropdown">
                            <button data-bs-toggle="dropdown" className="dropdown-toggle btn btn-light">
                                {key}
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-funnel-fill"> Filter</span> </span> </li>
                                <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-down"> Sort Asc</span> </span> </li>
                                <li className="dropdown-item"> <span className="dropdown-item-text"> <span className="bi bi-sort-alpha-up"> Sort Desc</span> </span> </li>
                            </ul>
                       </div>
                    </th>)
                 } 
                 <th>Actions</th>
               </tr> 
            </thead>
            <tbody>
              {
                 props.data.map(item=>
                    <tr>
                        {
                            Object.values(item).map(value=><td key={value}>{value}</td>)
                        }
                        <td>
                            <button className="btn btn-primary bi bi-eye-fill mx-2"></button>
                            <button className="btn btn-warning bi bi-pen-fill"></button>
                            <button className="btn btn-danger bi bi-trash-fill mx-2"></button>
                        </td>
                    </tr>
                 )
              }
            </tbody>
        </table>
     )
}