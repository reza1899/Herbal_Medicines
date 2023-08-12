import {Routes, Route} from "react-router-dom"
import {
    Main,
    Navbar
} from "./components/components"
const App = () => {
    return (
        <div className="App">
            <Navbar/>
           <Routes>
               <Route path="/" element={<Main/>}/>
           </Routes>
        </div>
    );
}
export default App;
