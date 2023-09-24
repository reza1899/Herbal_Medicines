// import Search from "./searchBox"
import {useNavigate} from "react-router-dom"
import {useEffect, useRef, useState} from "react"
import "./header.css"
import MenuSearchBox from "./../searchBoxs/menu_search_Box"
const Header = () => {
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
                <div className="header_overlay">

                   <div className="header_desc">
                       <h2 style={{fontSize:"50px"}}>
                            داروهای گیاهی
                       </h2>
                       <p style={{fontSize:"25px"}}>
                           محصولات گیاهی را از ما بخواهید...
                       </p>
                   </div>
                    {/* <nav className="">
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
                </nav> */}
                    {/* responsive nav */}
                </div>
                <div className="responsive_nav" ref={menuRef} style={{marginRight: show + "px"}}
                     onClick={e => e.stopPropagation()}>
                    <ul className="">
                        <li className="d-flex justify-content-end "><p className="p-3 item_one" onClick={() => {
                            setShow(-380)
                        }}>بستن<i className="fa fa-times fs-5 m-3"></i></p></li>
                        <hr/>
                        <li className="menu_item"><MenuSearchBox/></li>
                        <hr/>
                        <li className="menu_item"><p className="p-3" onClick={() => {
                            navigate("/")
                        }}>خانه</p></li>
                        <hr/>
                        <li className="menu_item"><p className="p-3" onClick={() => {
                            navigate("/contact")
                        }}>تماس با ما</p></li>
                        <hr/>
                        <li className="menu_item"><p className="p-3" onClick={() => {
                            navigate("/blog")
                        }}>بلاگ</p></li>
                        <hr/>
                        <li className="menu_item"><p className="p-3" onClick={() => {
                            navigate("/login")
                        }}>ورود </p></li>
                        <hr/>
                        <li className="menu_item"><p className="p-3" onClick={() => {
                            navigate("/register")
                        }}>ثبت نام</p></li>
                    </ul>
                </div>
                {/* end of responsive nav */}
            </header>
        </>
    )
}
export default Header