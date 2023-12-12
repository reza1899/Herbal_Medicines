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
    const usesArray = plant.Uses.split("،"); // Split uses by comma and space
    const sideEffectsArray = plant.side_effects.split("،"); // Split side effects by comma and space

    return (
        <div className="main-view">
            <div className="img-info">
                <div className="img-section ">
                    <img className="plant-img" src={plant.avatarUrl} alt={plant.name}/>
                </div>
                <div className="info-right-section ">
                    <div className="d-flex p-3">
                        <h1 className="plant-name">{plant.name}</h1>
                        <p className="fs-2 mx-4">
                            /
                        </p>
                        <h1 className="plant-latin plant-name">{plant.latinName}</h1>
                    </div>
                    <hr className="plant-hr"/>
                    <div className="properties p-3">
                        <h3 className="h-Properties mb-4">خواصیت های گیاه :</h3>
                        <p className="paragraph">
                            {propertiesArray.map((property, index) => (
                                <p key={index}>{property}</p>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
            <div className="introduction">
                <div className="introduction-titles text-muted">
                   <button onClick={ () => {
                       document.getElementById("uses").scrollIntoView();
                   }} className="btn">
                        زمینه های استفاده
                   </button>
                    <button onClick={() => {
                        document.getElementById("how to use").scrollIntoView();
                    }} className="btn mx-3">
                        نحوهی استفاده
                    </button>
                    <button onClick={() => {
                        document.getElementById("side_effects").scrollIntoView();
                    }} className="btn">
                        مضرات
                    </button>
                </div>
                <hr className=""/>
                {/*uses*/}
                <div className="uses-section" id="uses">
                    <h1 className="h-section  fs-5">
                        زمینه های استفاده
                    </h1>
                    <hr className="uses-hr border border-4 border-success"/>

                    <p className="paragraph my-5 fs-5 fw-bold">
                        {
                            usesArray.map((use, index) => (
                                <p key={index}>
                                    {index + 1}.
                                    {use}
                                </p>
                            ))
                        }
                    </p>
                </div>
                <hr/>

                {/*how to use*/}
                <div className="how-to-use-section" id="how to use">
                    <h1 className="h-section fs-5">
                        نحوه ی استفاده
                    </h1>
                    <hr className="uses-hr border border-4 border-info"/>

                    <p className="paragraph my-5 fs-5 fw-bold">
                        {plant.preparation}
                    </p>
                </div>
                <hr/>

                {/*side effects*/}
                <div className="side-effects-section" id="side_effects">
                    <h1 className="h-section fs-5">
                        مضزات
                    </h1>
                    <hr className="uses-hr border border-4 border-danger"/>
                    <p className="paragraph my-5 fs-5 fw-bold">
                        {
                            sideEffectsArray.map((sideEffect, index) => (
                                <p key={index}>
                                    {index + 1}.
                                    {sideEffect}
                                </p>
                            ))
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewPlants;
