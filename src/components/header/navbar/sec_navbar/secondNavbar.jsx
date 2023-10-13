import "./sec_navbar.css"
import {useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const SecondNavbar = () => {
    const [showAboutUs, setShowAboutUs] = useState(false)
    const [showBlog, setShowBlog] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname === "/") {
            document.querySelector(".main_navbar").style.position = "absolute"
        } else {
            document.querySelector(".main_navbar").style.position = "relative"
        }
    })
    return (
        <>
            <div className="main_navbar">
                <ul className="d-flex justify-content-around w-100">
                    <li onClick={() => navigate("/")}>
                        <p className="m-0">
                            <i className="fa fa-home ms-1"></i> خانه
                        </p>
                    </li>
                    <li onClick={() => navigate("/ts")}>
                        <p className="m-0">
                            <i className="fas fa-star ms-2"></i>
                            مزاج شناسی
                        </p>
                    </li>
                    <li onMouseOver={() => setShowBlog(true)} onMouseLeave={() => setShowBlog(false)}>
                        <p className="m-0">
                            <i className="fas fa-flask ms-2"></i>
                            مطالب علمی
                            <i className="fas fa-caret-down me-2"></i>

                        </p>
                    </li>
                    <li className="about_us" onMouseOver={() => setShowAboutUs(true)}
                        onMouseLeave={() => setShowAboutUs(false)}>
                        <p className="m-0">
                            <i className="fas fa-street-view ms-2"></i>
                            درباره ی ما
                            <i className="fas fa-caret-down me-2"></i>
                        </p>
                    </li>
                    <li className="d-flex">
                        <p className="auth m-0 ms-2" onClick={() => navigate("/login")}>
                            ورود
                        </p>
                        /
                        <p className="auth m-0 me-2" onClick={() => navigate("/register")}>
                            ثبت نام
                        </p>

                    </li>
                </ul>
                {/*about us dropdown section*/}
                <div className={`aboutUs_d ${showAboutUs ? 'div-aboutUs-show' : 'div-aboutUs'}`}
                     onMouseOver={() => setShowAboutUs(true)} onMouseLeave={() => setShowAboutUs(false)}>
                    <ul>
                        <li>
                            <p>درباره ی ما</p>
                        </li>
                        <hr/>
                        <li>
                            <p>تماس با ما</p>
                        </li>
                        <hr/>
                        <li>
                            <p>سوالات متداول</p>
                        </li>

                    </ul>
                </div>
                {/*  end about us dropdown section  */}

                {/*  blog dropdown section  */}
                <div className={`blog_d ${showBlog ? 'div-blog-show' : 'div-blog'}`}
                     onMouseOver={() => setShowBlog(true)} onMouseLeave={() => setShowBlog(false)}>
                    <ul>
                        <li>
                            <p>اطلاعات کلی</p>
                        </li>
                        <hr/>
                        <li>
                            <p>تفاوت مزاج و طبع</p>
                        </li>
                        <hr/>
                        <li>
                            <p>چگونگی تغییر مزاج</p>
                        </li>

                    </ul>
                </div>
                {/*  end blog dropdown section  */}
            </div>
        </>
    )
}
export default SecondNavbar;