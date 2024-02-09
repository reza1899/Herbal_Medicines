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
            localStorage.setItem("email", formData.email)
            alert("You are logged in")
            console.log(data, error)
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
            <div className="main-register-form">
                <div className="form">
                    <input className="" placeholder="ایمیل" type="email" name="email" onChange={handleChange}/>
                    <input className="" placeholder="رمز عبور" type="password" name="password" onChange={handleChange}/>

                    <button className="" onClick={handleSubmit}>ورود</button>
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