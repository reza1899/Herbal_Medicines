import "./sec_navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SecondNavbar = () => {
    const [userLogin, setUserLogin] = useState(false);
    const [userName, setUserName] = useState(null);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showBlog, setShowBlog] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") {
            document.querySelector(".main_navbar").style.position = "absolute";
        } else {
            document.querySelector(".main_navbar").style.position = "relative";
        }
    }, []);

    useEffect(() => {
        setUserLogin(localStorage.getItem("isLogin"));
        setUserName(localStorage.getItem("username"));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("username");
        setUserLogin(false);
        setUserName(null);
    };

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
                    <li className="about_us" onMouseOver={() => setShowAboutUs(true)} onMouseLeave={() => setShowAboutUs(false)}>
                        <p className="m-0">
                            <i className="fas fa-street-view ms-2"></i>
                            درباره ی ما
                            <i className="fas fa-caret-down me-2"></i>
                        </p>
                    </li>
                    {userLogin ? (
                        <li
                            className="d-flex"
                            onMouseOver={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <p>نام کاربری: {userName}</p>
                            {isHovering && (
                                <div className="logoutDiv">
                                    <button onClick={handleLogout}>خروج</button>
                                </div>
                            )}
                        </li>
                    ) : (
                        <li className="d-flex">
                            <p className="auth m-0 ms-2" onClick={() => navigate("/login")}>
                                ورود
                            </p>
                            /
                            <p className="auth m-0 me-2" onClick={() => navigate("/register")}>
                                ثبت نام
                            </p>
                        </li>
                    )}
                </ul>
                {/*about us dropdown section*/}
                <div className={`aboutUs_d ${showAboutUs ? "div-aboutUs-show" : "div-aboutUs"}`} onMouseOver={() => setShowAboutUs(true)} onMouseLeave={() => setShowAboutUs(false)}>
                    <ul>
                        <li onClick={() => navigate("/contact")}>
                            <p>درباره ی ما</p>
                        </li>
                    </ul>
                </div>
                {/* end about us dropdown section */}

                {/* blog dropdown section */}
                <div className={`blog_d ${showBlog ? "div-blog-show" : "div-blog"}`} onMouseOver={() => setShowBlog(true)} onMouseLeave={() => setShowBlog(false)}>
                    <ul>
                        <li onClick={() => navigate("/blog")}>
                            <p>اطلاعات کلی</p>
                        </li>
                        <hr />
                        <li onClick={() => navigate("/difference")}>
                            <p>تفاوت مزاج و طبع</p>
                        </li>
                        <hr />
                        <li onClick={() => navigate("/change_mood")}>
                            <p>چگونگی تغییر مزاج</p>
                        </li>
                    </ul>
                </div>
                {/* end blog dropdown section */}
            </div>
        </>
    );
};

export default SecondNavbar;
