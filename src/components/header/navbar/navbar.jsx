import Search from "../../searchBoxs/searchBox"
import {useEffect, useRef, useState} from "react"
import {useNavigate} from "react-router-dom";
import "./navbar.css"
import MenuSearchBox from "../../searchBoxs/menu_search_Box";
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
            <div className="container_m">
                <div className="container">
                    <div className="menu_icon">
                        <button className="menu_button" onClick={() => {
                            setShow(prevMargin => prevMargin === 0 ? -380 : 0)
                        }}>
                            <i className="fa fa-bars fs-5 m-2"></i>
                        </button>
                    </div>
                    <div className="main_header">
                        <img className="logo"
                             src="https://img.freepik.com/premium-photo/hand-draw-shampoo-bottel-vector-design_862994-17792.jpg?size=626&ext=jpg&ga=GA1.2.1004515625.1688841236&semt=ais"
                             alt=""/>
                        <div className="left ">
                            <div className="">
                                <a className="" href="https://www.instagram.com"><i
                                    className="social_header fab fa-instagram fs-1 m-2"
                                    style={{color: "#C13584"}}></i></a>
                                <a className="" href="https://www.facebook.com"><i
                                    className="social_header fab fa-facebook fs-1 m-2"
                                    style={{color: "#3B5998"}}></i></a>
                                <a className="" href="https://www.telegram.com"><i
                                    className="social_header fab fa-telegram fs-1 m-2"
                                    style={{color: "#2AABEE"}}></i> </a>
                            </div>
                            <Search/>
                        </div>
                    </div>
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
            </div>
        </>
    )
}
export default Navbar;