import React from "react";

const contexts = React.createContext({
    isLogin : false,
    setIsLogin : () => {},
    loading : false,
    setLoading :() => {},
    filteredPlants : [],
    setFilteredPlants : () => {}
})
export default contexts