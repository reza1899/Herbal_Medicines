import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, validation, etc.
        console.log(formData);
    };

    return (
        <div className="main">
            <div className="left_sec">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>نام:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>نام خانوادگی:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>رمز عبور:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button type="submit">ثبت</button>

                </form>
                <p onClick={() => navigate("/register")}>
                    هنوز ثبت نام نکرده اید؟
                </p>
            </div>
            <div className="right_sec">
                <img src="https://img.freepik.com/free-photo/herbal-spices-wooden-bowl-spoon-sack_23-2147975510.jpg?w=740&t=st=1693054713~exp=1693055313~hmac=f33955bff646218b05544ccb7b6d61aad1444c9082767da645f627164977e6ed" alt="" />
            </div>
        </div>
    );
};

export default Login;
