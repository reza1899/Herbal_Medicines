import Search from "../../searchBoxs/searchBox"

const Navbar = ({setShow}) => {
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
            </div>
        </>
    )
}
export default Navbar;