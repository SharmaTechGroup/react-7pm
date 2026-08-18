import { useRef, useState } from "react"
import { useFormik } from "formik"

export function FormDemo(){


    function ValidateProduct(product){
         let errors = {}

            if(product.Id===0){
                errors.Id = 'Product Id Required';
            }

            if(product.Name.length===0){
                errors.Name = 'Name Required';
            } else {
                if(product.Name.length<4){
                    errors.Name = 'Name too short';
                }
            }

            if(product.Category==="-1"){
                errors.Category = 'Please select a category';
            }

            if(product.Pay===''){
                errors.Pay = 'Select a payment mode';
            }

            if(product.Mobile===''){
                errors.Mobile = 'Mobile Required';
            } else {
                if(!product.Mobile.match(/^\+91\d{10}$/)){
                    errors.Mobile = 'Invalid Mobile +91 10 digits';
                }
            }

         return errors;
    }

    const formik = useFormik({
        initialValues: {
            Id: 0,
            Name:'',
            Category: '-1',
            Pay:'',
            Mobile:''
        },
        validate: ValidateProduct,
        onSubmit: (data)=>{
            console.log(data);
        }
    })

    function handleCategoryBlur(e){
        formik.handleBlur(e);
        alert('Category Blured');
    }
    
    return(
        <div className="container-fluid">
            <h3>Register</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Id</dt>
                    <dd><input type="number" {...formik.getFieldProps('Id')} name="Id" /></dd>
                    <dd className="text-danger">{formik.touched.Id && formik.errors.Id}</dd>
                    <dt>Name</dt>
                    <dd><input type="text" {...formik.getFieldProps('Name')}   name="Name" /></dd>
                    <dd className="text-danger">{ formik.touched.Name && formik.errors.Name}</dd>
                    <dt>Category</dt>
                    <dd>
                        <select name="Category" onBlur={handleCategoryBlur} onChange={formik.handleChange}>
                            <option value="-1">Select Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.touched.Category && formik.errors.Category}</dd>
                    <dt>Payment</dt>
                    <dd>
                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Pay" value="Cash" /> <label>Cash</label>
                        <input type="radio" onBlur={formik.handleBlur}  onChange={formik.handleChange}  name="Pay" value="UPI" /> <label>UPI</label>
                        <input type="radio" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="Pay" value="Credit Card" /> <label>Credit Card</label>
                    </dd>
                    <dd className="text-danger">{ formik.touched.Pay && formik.errors.Pay}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.touched.Mobile && formik.errors.Mobile}</dd>
                </dl>
                <button disabled={(formik.isValid)?false:true} type="submit">Register</button>
            </form>
        </div>
    )
}