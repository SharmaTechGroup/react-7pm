import { useState } from "react"
import { DataGrid } from "../../controlled-components/data-grid";

export function ControlledDemo(){


    const [products] = useState([{Name:'TV', Price:56000, Rating:4.2}, {Name:'Mobile', Price:123000, Rating:4.6}]);
    const [employees] = useState([{FirstName:'Raj', LastName:'Kumar', Designation:'Manager', Salary: 45700}]);

    return(
        <div className="container-fluid">
            <h3>Controlled Demo</h3>
            <DataGrid  caption='Product Details' data={products} />
            <DataGrid caption='Employees' data={employees} />
        </div>
    )
}