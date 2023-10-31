import React from "react";
import { useParams } from "react-router-dom";
import {plants} from "../../service/data";

const ViewPlants = () => {
    const { name } = useParams();

    const plant =
        plants.find((p) => p.name === name);

    if (!plant) {
        return (
            <div>
                <p>Plant not found.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{plant.name}</h1>
            <p>Description: {plant.properties}</p>
        </div>
    );
};

export default ViewPlants;
