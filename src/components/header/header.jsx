// import Search from "./searchBox"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import "./header.css"
const Navbar = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(-380)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShow(-380)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    return (
        <>
            <header>
                <nav className="">
                    <div className="container_nav">
                        <div className="menu_icon">
                        <button className="menu_button" onClick={() => { setShow(prevMargin => prevMargin===0 ? -380 : 0) }}>
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
                <div className="responsive_nav" ref={menuRef} style={{ marginRight:show + "px" }}  onClick={e => e.stopPropagation()}>
                    <ul className="">
                        <li className="menu_item"><p className="p-3" onClick={() => { navigate("/") }}>خانه</p></li>
                        <hr />
                        <li className="menu_item"><p className="p-3" onClick={() => { navigate("/contact") }}>تماس با ما</p></li>
                        <hr />
                        <li className="menu_item" ><p className="p-3" onClick={() => { navigate("/blog") }}>بلاگ</p></li>
                        <hr />
                        <li className="menu_item"><p className="p-3" onClick={() => { navigate("/login") }}>ورود </p></li>
                        <hr />
                        <li className="menu_item"><p className="p-3" onClick={() => { navigate("/register") }}>ثبت نام</p></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Navbar