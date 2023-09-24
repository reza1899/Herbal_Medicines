import "./header.css"
const Header = () => {

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
                {/* end of responsive nav */}
            </header>
        </>
    )
}
export default Header