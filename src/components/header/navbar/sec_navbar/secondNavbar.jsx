import "./sec_navbar.css"
import {useNavigate,useLocation} from "react-router-dom";
import {useEffect} from "react";

const SecondNavbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
        if(location.pathname === "/"){
            document.querySelector(".main_navbar").style.position = "absolute"
        }
        else{
            document.querySelector(".main_navbar").style.position = "relative"
        }
    })
    return (
        <>
            <div className="main_navbar">
                <ul className="d-flex justify-content-around w-100">
                    <li onClick={ () => navigate("/")}>
                        <p className="m-0">
                            <i className="fa fa-home ms-1"></i> خانه
                        </p>
                    </li>
                    <li onClick={ () => navigate("/ts")}>
                        <p className="m-0">
                            <i className="fas fa-star ms-2"></i>
                            مزاج شناسی
                        </p>
                    </li>
                    <li>
                        <p className="m-0">
                            <i className="fas fa-flask ms-2"></i>
                            مطالب علمی
                            <i className="fas fa-caret-down me-2"></i>

                        </p>
                    </li>
                    <li>
                        <p className="m-0">
                            <i className="fas fa-street-view ms-2"></i>
                            درباره ی ما
                            <i className="fas fa-caret-down me-2"></i>
                        </p>
                    </li>
                    <li className="d-flex">
                        <p className="auth m-0 ms-2">
                            ورود
                        </p>
                        /
                        <p className="auth m-0 me-2">
                            ثبت نام
                        </p>

                    </li>
                </ul>
            </div>
        </>
    )
}
export default SecondNavbar;