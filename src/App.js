import { Routes, Route } from "react-router-dom"
import contextApi from "./context/contextApi"
import { useState } from "react"
import {
    Main,
    Navbar
} from "./components/components"
const App = () => {
    const [loading , setLoading] = useState(false)
    const [filteredPlants , setFilteredPlants] = useState([])
    return (
            <contextApi.Provider value = {{
                loading,
                setLoading,
                filteredPlants,
                setFilteredPlants
            }}>
                <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                </Routes>
            </div>
            </contextApi.Provider>
    );
}
export default App;
