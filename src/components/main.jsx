import {useContext} from "react"
import contextApi from "./../context/contextApi"

const Main = () => {
    const {filteredPlants, searchValue} = useContext(contextApi)
    return (
        <>
           <div className="1">
               {
                   searchValue ?
                       (
                           filteredPlants.map((plant) => {
                               return <div className="card" key={plant.id}>
                                   <div className="card-body">
                                       <h5 className="card-title">{plant.name}</h5>
                                       <p className="card-text">{plant.description}</p>
                                   </div>
                               </div>
                           })
                       )
                       :
                       (
                           <div className="text-center">
                               <h3>موردی یافت نشد</h3>
                           </div>

                       )
               }
           </div>
        </>
    )
}
export default Main