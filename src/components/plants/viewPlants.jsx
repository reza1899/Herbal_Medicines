import {useParams} from "react-router-dom";
import {plants} from "../../service/data";
import "./viewPlants.css"

const ViewPlants = () => {
    const {name} = useParams();

    const plant =
        plants.find((p) => p.name === name);

    if (!plant) {
        return (
            <div>
                <p>Plant not found.</p>
            </div>
        );
    }
    const propertiesArray = plant.properties.split("،"); // Split properties by comma and space
    return (
        <div className="main-view">
            <div className="d-flex">
                <div className="img-section border border-3 ">
                    <img className="plant-img" src={plant.avatarUrl} alt={plant.name}/>
                </div>
                <div className="info-right-section border border-3">
                    <div className="d-flex p-3">
                        <h1>{plant.name}</h1>
                        <p className="fs-2 mx-4">
                            /
                        </p>
                        <h1 className="plant-latin" >{plant.latinName}</h1>
                    </div>
                    <hr/>
                    <div className="properties p-3">
                        <h3 className="mb-4">خواصیت های گیاه :</h3>
                        {propertiesArray.map((property, index) => (
                            <p key={index}>{property}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="introduction">
                <div className="introduction-titles text-muted">
                    <p>
                        زمینه های استفاده
                    </p>
                    <p className="mx-4">
                        مضرات
                    </p>
                    <p>
                        نحوه ی استفاده
                    </p>
                </div>
                <hr/>

                <div>

                </div>
            </div>
        </div>
    );
};

export default ViewPlants;
