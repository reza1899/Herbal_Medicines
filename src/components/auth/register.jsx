// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./auth.css";
//
// const Register = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         number: "",
//         email: "",
//         address: "",
//         password: "",
//         rePassword: ""
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
//             <div className="auth_left_sec top-0">
//                 <form onSubmit={handleSubmit}>
//                     <div className="auth_form-group">
//                         <label>نام:</label>
//                         <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
//                     </div>
//                     <div className="auth_form-group">
//                         <label>نام خانوادگی:</label>
//                         <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
//                     </div>
//                     <div className="auth_form-group">
//                         <label>شماره تماس:</label>
//                         <input type="text" name="number" value={formData.number} onChange={handleChange} required />
//                     </div>
//                     <div className="auth_form-group">
//                         <label>ایمیل:</label>
//                         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                     </div>
//                     <div className="auth_form-group">
//                         <label>آدرس:</label>
//                         <input type="text" name="address" value={formData.address} onChange={handleChange} required />
//                     </div>
//                     <div className="auth_form-group">
//                         <label>رمز عبور:</label>
//                         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                     </div>
//                     <div className="auth_form-group">
//                         <label>تکرار رمز عبور:</label>
//                         <input type="password" name="rePassword" value={formData.rePassword} onChange={handleChange} required />
//                     </div>
//                     <button className="auth_button" type="submit">ثبت</button>
//
//                 </form>
//                 <p className="auth_p" onClick={() => navigate("/login")}>
//                     وارد حساب کاربری شوید
//                 </p>
//             </div>
//             <div className="auth_right_sec">
//                 <img className="auth_img" src="../../../images/register.jpg" alt="" />
//
//             </div>
//         </div>
//     );
// };
//
// export default Register;

import { useState } from "react";
import supabase from "../../config/supabaseClient";
import "./auth.css";
import { Link , useNavigate} from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    async function handleSubmit() {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                data: {
                    username: formData.username,
                    confirmPassword: formData.confirmPassword,
                }
            });
            alert("Check your email to verify your email");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    async function handleGoogleRegister() {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            })
            alert("You are logged in")
        }catch (error) {
            alert(error)
        }

    }

    return (
        <>
            <div className="main-register-form">
                <div className="form">
                    <input className="" placeholder="Username" type="text" name="username" onChange={handleChange} />
                    <input className="" placeholder="Email" type="email" name="email" onChange={handleChange}/>
                    <input className="" placeholder="Password" type="password" name="password" onChange={handleChange}/>
                    <input className="" placeholder="Confirm password" type="password" name="confirmpassword" onChange={handleChange}/>

                    <button className="" onClick={handleSubmit}>Register</button>
                    <p className="text-muted text-center mt-3 ms-5">
                        Or register with
                    </p>
                    <div className="provider">
                        <button className="d-flex justify-content-around" onClick={handleGoogleRegister}>Google <i className="fab fa-google mt-1"></i></button>
                    </div>
                    <p className="text-center mt-4">
                        Dont have an Account? <Link to="/login">Login</Link>
                    </p>
                </div>
                <img className="register-img" src="../../../images/My%20password-amico.png"  alt="register"/>

            </div>
        </>
    );
};

export default Register;