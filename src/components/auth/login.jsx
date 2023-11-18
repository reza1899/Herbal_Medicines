// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./auth.css";
//
// const Login = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         password: "",
//     });
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can handle the form submission, validation, etc.
//         console.log(formData);
//     };
//
//     return (
//         <div className="auth_main">
//             <div className="auth_left_sec">
//                 <form onSubmit={handleSubmit}>
//                     <div className="auth_form-group">
//                         <label>نام:</label>
//                         <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
//                     </div>
//                     <div className="auth_form-group">
//                         <label>نام خانوادگی:</label>
//                         <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
//                     </div>
//
//                     <div className="auth_form-group">
//                         <label>رمز عبور:</label>
//                         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                     </div>
//                     <button type="submit" className="auth_button">ثبت</button>
//
//                 </form>
//                 <p className="auth_p" onClick={() => navigate("/register")}>
//                     هنوز ثبت نام نکرده اید؟
//                 </p>
//             </div>
//             <div className="auth_right_sec">
//                 <img className="auth_img" src="../../../images/login.jpg" alt=""  />
//             </div>
//         </div>
//     );
// };
//
// export default Login;
import {useState} from "react";
import supabase from "../../config/supabaseClient";
import {Link} from "react-router-dom";
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }
    async function handleSubmit() {

        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            })
            alert("You are logged in")
        }catch (error) {
            alert(error)
        }
    }
    function handleGoogleRegister() {
        supabase.auth.signInWithOAuth({
            provider: 'google'
        })
    }
    return (
        <>
            {/*<div className="position-absolute top-50 start-50 end-50">*/}
            {/*    <input type="email" placeholder="Email"/>*/}
            {/*    <input className="my-3" type="password" placeholder="Password"/>*/}
            {/*    <button className="btn btn-success" onClick={handleSubmit}>submit</button>*/}
            {/*</div>*/}
            <div className="main-register-form">
                <div className="form">
                    <input className="" placeholder="Email" type="email" name="email" onChange={handleChange}/>
                    <input className="" placeholder="Password" type="password" name="password" onChange={handleChange}/>

                    <button className="" onClick={handleSubmit}>Login</button>
                    <p className="text-muted text-center mt-3 ms-5">
                        Or register with
                    </p>
                    <div className="provider">
                        <button className="d-flex justify-content-around" onClick={handleGoogleRegister}>Google <i className="fab fa-google mt-1"></i></button>
                    </div>
                    <p className="text-center mt-4">
                        Already have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
                <img className="register-img" src="../../../images/Forgot%20password-rafiki.png"  alt="register"/>

            </div>
        </>
    )
}
export default Login;