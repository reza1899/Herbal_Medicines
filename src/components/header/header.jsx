// import Search from "./searchBox"
import { useNavigate } from "react-router-dom"
import "./header.css"
const Navbar = () => {
    const navigate = useNavigate()
       return (
        <>
            <div>
                <header className="">
                    <div className="container p-4">
                        <div className="row m-0 d-flex justify-content-between position-relative">
                            <div className="col-9 p-0">
                                        <button  className="buttonStyle btn fw-bold position-absolute" onClick={() => navigate("/")}>
                                            خانه
                                        </button>
                                        <button className="buttonStyle btn fw-bold position-absolute" onClick={() => navigate("/contact")}>
                                            تماس با ما
                                        </button>
                                        <button className="buttonStyle btn fw-bold position-absolute" onClick={() => navigate("/blog")}>
                                            بلاگ
                                        </button>
                                        <button className="buttonStyle btn fw-bold position-absolute" onClick={() => navigate("/blog")}>
                                            بلاگ
                                        </button>
                            </div>
                            <div className="col-3 p-0">

                            </div>
                        </div>
                    </div>
                </header>
                {/* <Search/> */}
            </div>
        </>
    )
}
export default Navbar