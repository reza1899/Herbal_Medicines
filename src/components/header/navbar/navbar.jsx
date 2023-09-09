import "./navbar.css";
import {useState} from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <nav className="">
                <div className="container" onMouseLeave={ setIsMenuOpen.bind(this, false)}>
                    <div className="nav_products_menu_icon"

                         onMouseOver={setIsMenuOpen.bind(this, true)}

                    >
                        <i className="fa fa-bars fs-5 mx-2 mt-1"></i>
                        <p>نمایش محصولات</p>
                        {isMenuOpen ? <i className="fas fa-angle-down fs-5 me-2 mt-1"></i>
                            : <i className="fas fa-angle-up fs-5 me-2 mt-1"></i>
                        }
                    </div>

                    {
                        isMenuOpen && (
                            <div className="nav_products_menu">
                                <ul>
                                    <li>ادویه ها</li>
                                    <hr/>
                                    <li>دمنوش ها</li>
                                    <hr/>
                                    <li>دانه ها</li>
                                    <hr/>
                                    <li>پماد ها</li>
                                    <hr/>
                                    <li>فرآورده ها</li>
                                    <hr/>
                                    <li>خوراکی ها</li>

                                </ul>
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
