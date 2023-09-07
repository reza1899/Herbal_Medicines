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
    Navbar,
} from "./service/components";

const App = () => {
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [isLogin, setIsLogin] = useState();
    
    // Get the current location
    const location = useLocation();
    
    // Determine if Navbar and Footer should be shown
    const showNavbarAndFooter = !["/login", "/register"].includes(location.pathname);

    return (
        <contextApi.Provider value={{
            searchValue,
            setSearchValue,
            loading,
            setLoading,
            filteredPlants,
            setFilteredPlants,
            isLogin,
            setIsLogin
        }}>
            <div className="App">
                {showNavbarAndFooter && <Header />}
                {showNavbarAndFooter && <Navbar />}

                <div className="app-wrapper">
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
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
