import { useForm } from "react-hook-form"
import { Navbar } from "../../controlled-components/navbar";

export function HookFormDemo(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (values)=>{
        console.log(values);
    }

    return(
        <div className="container-fluid">
            <Navbar  theme='bg-danger text-white' brandLogo='bi bi-bag-fill' brandName='Shopping' menuItems={['Home', 'Kids', 'Men', 'Women', 'Offers']} searchString='eg: brands, products' />
            <Navbar layout='sidebar' brandLogo='bi bi-cloud' brandName='Weather App' menuItems={['Your City', 'Internationa', 'Local', 'Archives']} searchString='eg: city, date' />
            <h2>Register</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...register("UserName", { required:true, minLength:4 })} name="UserName" /></dd>
                    <dd className="text-danger">
                        {(errors.UserName?.type==="required")?<span>User Name Required</span>:<span></span> && (errors.UserName?.type==="minLength")?<span>Name too short</span>:<span></span>}
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" {...register("Mobile", {required:true, pattern:/^\+91\d{10}$/})} name="Mobile" /></dd>
                    <dd className="text-danger">
                        {(errors.Mobile?.type==="required")?<span>Mobile Required</span>:<span></span> && (errors.Mobile?.type==="pattern")?<span>Invalid Mobile</span>:<span></span>}
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}