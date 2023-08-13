import React from "react";

const contexts = React.createContext({
    loading : false,
    setLoading :() => {},
    filteredPlants : [],
    setFilteredPlants : () => {}
})
export default contexts