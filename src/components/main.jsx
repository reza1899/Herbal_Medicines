import { useContext} from "react"
import contextApi from "./../context/contextApi"
const Main = () => {
    const {filteredPlants} = useContext(contextApi)
    return (
       <>
        <div>
            {
                filteredPlants.map((item) => 
                <div>
                    {item.name}
                </div>
                )
            }
        </div>
       </>
    )
}
export default Main