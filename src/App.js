import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
    Viewplants,
    NotFound,
    Difference,
    Change_mood,
} from "./service/components";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [isLogin, setIsLogin] = useState();

    // Get the current location
    const location = useLocation();

    // Determine if the header and footer should be shown
    const showHeaderAndFooter = location.pathname !== "/404";

    return (
        <contextApi.Provider value = {{
                loading,
                setLoading,
                filteredPlants,
                setFilteredPlants,
                isLogin,
                setIsLogin,
            }}
        >
            <>
                <div className="App">
                    {showHeaderAndFooter && <Navbar />}
                    {location.pathname === "/" && showHeaderAndFooter && <Header />}
                    <div className="app-wrapper">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/contact" element={<ContactUs />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/TS" element={<TemperamentSurvey />} />
                            <Route path="/view/:name" element={<Viewplants />} />
                            <Route path="/difference" element={<Difference />} />
                            <Route path="/change_mood" element={<Change_mood />} />
                            <Route path="/404" element={<NotFound />} />
                            <Route path="*" element={<Navigate to="/404" replace />} />
                        </Routes>
                    </div>
                    {showHeaderAndFooter && (
                        <div className="footer">
                            <Footer />
                        </div>
                    )}
                </div>
            </>
        </contextApi.Provider>
    );
};

export default App;