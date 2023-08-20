// import Search from "./searchBox"
import { useNavigate } from "react-router-dom"
import "./header.css"
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <header>
                <nav className="">
                    <div className="container_nav">
                        <div className="menu_icon">
                            <button className="btn">
                                <i className="fa fa-bars fs-5 m-2"></i>
                            </button>
                        </div>
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6FrEVpGlltmCUHnuimao6-vEUKmSH4pIlg&usqp=CAU" alt="" />
                        </div>
                        <ul className="">
                            <li><button className="btn" onClick={() => { navigate("/") }}>Home</button></li>
                            <li><button className="btn" onClick={() => { navigate("/contact") }}>Contact</button></li>
                            <li><button className="btn" onClick={() => { navigate("/blog") }}>Blog</button></li>
                        </ul>

                        <div className="auth">
                            <ul className="">
                                <li><button className="btn" onClick={() => { navigate("/login") }}>Login</button></li>
                                <li><button className="btn" onClick={() => { navigate("/register") }}>Register</button></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="responsive_nav">
                    <ul className="">
                        <li><button className="btn" onClick={() => { navigate("/") }}>Home</button></li>
                        <li><button className="btn" onClick={() => { navigate("/contact") }}>Contact</button></li>
                        <li><button className="btn" onClick={() => { navigate("/blog") }}>Blog</button></li>
                        <li><button className="btn" onClick={() => { navigate("/login") }}>Login</button></li>
                        <li><button className="btn" onClick={() => { navigate("/register") }}>Register</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Navbar