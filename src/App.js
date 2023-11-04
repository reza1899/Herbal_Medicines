import { Routes, Route, useLocation } from "react-router-dom";
import contextApi from "./context/contextApi";
import { useState } from "react";
import "./../src/components/footer/footer.css";
import {
    Main,
    Header,
    ContactUs,
    Blog,
    Login,
    Register,
    Footer,
    TemperamentSurvey,
    Navbar,
    Blogs,
    Viewplants,
} from "./service/components";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [isLogin, setIsLogin] = useState();
    
    // Get the current location
    const location = useLocation();
    
    // Determine if Navbar and Footer should be shown
    const showNavbarAndFooter = !["/login", "/register"].includes(location.pathname);

    return (
        <contextApi.Provider value={{
            loading,
            setLoading,
            filteredPlants,
            setFilteredPlants,
            isLogin,
            setIsLogin
        }}>
            <div className="App">
                {showNavbarAndFooter && <Navbar />}
                {/*{showNavbarAndFooter && <Navbar />}*/}
                {location.pathname === "/" && <Header />}
                <div className="app-wrapper">
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/TS" element={<TemperamentSurvey />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/view/:name" element={<Viewplants />} />
                    </Routes>
                </div>
                <div className="footer">
                    {showNavbarAndFooter && <Footer />}
                </div>
            </div>
        </contextApi.Provider>
    );
};

export default App;
