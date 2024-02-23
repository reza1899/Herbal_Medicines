import { useState } from "react";
import supabase from "../../config/supabaseClient";
import "./auth.css";
import Spinner from "../Spinner";
import { Link , useNavigate} from "react-router-dom";
const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
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
        // insert user to database operation

        try {
            setIsLoading(true)
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match");
                setIsLoading(false)
                return;
            }

            const { data, error } = await supabase
                .from('Users')
                .insert([
                    { email: formData.email, password: formData.password, username: formData.username },
                ])
                .select()

            console.log(data ,error)
        }catch (error) {
            setIsLoading(false)
            console.log(error);
        }

        // sign up operation
        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
               options: {
                   data: {
                       username: formData.username,
                       confirmPassword: formData.confirmPassword,
                   }
               }
            });
            setIsLoading(false)
            alert("Check your email to verify your email");
            navigate("/login");
            console.log(data, error);
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
            console.log(data, error)
        }catch (error) {
            alert(error)
        }

    }

    return (
        <>
            <div className="main-register-form">
                <div className="form">
                    <input className="" placeholder="نام کاربری" type="text" name="username" onChange={handleChange} />
                    <input className="" placeholder="ایمیل" type="email" name="email" onChange={handleChange}/>
                    <input className="" placeholder="رمز عبور" type="password" name="password" onChange={handleChange}/>
                    <input className="" placeholder="تکرار رمز عبور " type="password" name="confirmPassword" onChange={handleChange} />

                    <button className="" onClick={handleSubmit}>
                        {isLoading ? <Spinner/> : "ثبت نام"}
                    </button>
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