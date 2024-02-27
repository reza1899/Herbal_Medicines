import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import supabase from "../../config/supabaseClient";
import {Link} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate() 
    const [isLogin, setIsLogin] = useState(false)
    const [users, setUsers] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data, error} = await supabase
                    .from('Users')
                    .select();

                if (data) {
                    setUsers(data);
                }

                if (error) {
                    console.log("Error fetching users:", error.message);
                }
            } catch (error) {
                console.error("Error fetching users:", error.message);
            }
        };

        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit() {
        try {
            // Check if the entered email is already registered
            const userEmails = users && users.map(user => user.email);
            if (userEmails && userEmails.includes(formData.email)) {
                // Email is registered, now check the password
                const user = users.find(user => user.email === formData.email);
                if (user.password !== formData.password) {
                    alert("Incorrect password.");
                    return;
                } else {
                    localStorage.setItem("username", user.username);
                    setIsLogin(prevIsLogin => {
                        localStorage.setItem("isLogin", !prevIsLogin ? "true" : "false");
                        return !prevIsLogin;
                    });
                }
            } else {
                alert("This email is not registered.");
                return;
            }

            // Proceed with authentication
            const {data, error} = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });
            alert("You are logged in");
            console.log(data, error);
            navigate("/")
        } catch (error) {
            alert(error.message);
        }
    }

    function handleGoogleRegister() {
        supabase.auth.signInWithOAuth({
            provider: "google",
        });
    }

    return (
        <>
            <div className="main-register-form">
                <div className="form">
                    <input
                        className=""
                        placeholder="ایمیل"
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />
                    <input
                        className=""
                        placeholder="رمز عبور"
                        type="password"
                        name="password"
                        onChange={handleChange}
                    />

                    <button className="" onClick={handleSubmit}>
                        ورود
                    </button>
                    <p className="text-muted text-center mt-3 ms-5">Or register with</p>
                    <div className="provider">
                        <button
                            className="d-flex justify-content-around"
                            onClick={handleGoogleRegister}
                        >
                            Google <i className="fab fa-google mt-1"></i>
                        </button>
                        {/*{users && (*/}
                        {/*    <div>*/}
                        {/*        <h2>Users</h2>*/}
                        {/*        <ul>*/}
                        {/*            {users.map((user, index) => (*/}
                        {/*                <li key={index}>{user.email}</li>*/}
                        {/*            ))}*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </div>
                    <p className="text-center mt-4">
                        Already have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
                <img
                    className="register-img"
                    src="../../../images/Forgot%20password-rafiki.png"
                    alt="register"
                />
            </div>
        </>
    );
};

export default Login;
