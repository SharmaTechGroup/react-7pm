import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";

export function FormikDemo(){


    

    return(
        <div className="container-fluid">
            <h3>Register</h3>
            <Formik initialValues={{Name:'', Mobile:''}} validationSchema={yup.object({Name:yup.string().required('Name Required'), Mobile:yup.string().required('Mobile Required')})} onSubmit={(data)=>{console.log(data)}}>
                {
                    form =>
                    <Form>
                     <dl>
                        <dt>Name</dt>
                        <dd><Field type="text" name="Name" /></dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Name" />
                        </dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile" /></dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Mobile" />
                        </dd>
                     </dl>
                     <button type="submit">Register</button>
                     <div className="mt-3 text-danger">
                         <h3>Check all errors</h3>
                         <ul>
                            {
                                Object.values(form.errors).map(error=><li key={error}>{error}</li>)
                            }
                         </ul>
                     </div>
                    </Form>
                    
                }
            </Formik>
        </div>
    )
}