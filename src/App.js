import { Routes, Route } from "react-router-dom"
import contextApi from "./context/contextApi"
import { useState } from "react"
import {
    Main,
    Navbar,
    ContactUs,
    Blog,
    Login,
    Register,
    Footer,
} from "./service/components"
const App = () => {
    const [loading, setLoading] = useState(false)
    const [filteredPlants, setFilteredPlants] = useState([])
    const [isLogin, setIsLogin] = useState()
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
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </div>
        </contextApi.Provider>
    );
}
export default App;
