// import Search from "./searchBox"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <header>
                    <div className="container p-5 border">
                        <div className="row m-0 d-flex justify-content-between">
                            <div className="col-9 p-0">
                                <button className="btn fw-bold" onClick={() => navigate("/")}>
                                    خانه
                                </button>
                                <button className="btn fw-bold" onClick={() => navigate("/contact")}>
                                    تماس با ما
                                </button>
                                <button className="btn fw-bold" onClick={() => navigate("/blog")}>
                                    بلاگ
                                </button>
                            </div>
                            <div className="col-3 p-0">
                                sdasdasdasda
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