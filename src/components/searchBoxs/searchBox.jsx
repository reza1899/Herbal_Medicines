import {useContext, useRef, useState} from "react";
import {plants} from "../../service/data";
import "./search.css";
import contextApi from "./../../context/contextApi";

const Search = () => {
    const [searchResult, setSearchResult] = useState(false);
    const inputRef = useRef(null);

    const handleFocus = () => {
        setSearchResult(true);
    };

    const handleBlur = () => {
        setSearchResult(false);
    };

    const {setFilteredPlants, filteredPlants} = useContext(contextApi);

    const searching = (value) => {
        value ? setFilteredPlants(plants.filter((plant) => plant.name.includes(value))) :
            setFilteredPlants([]);

    };

    const handleInputChange = (event) => {
        const {value} = event.target;
        searching(value);
    };

    return (
        <>
            <div className="search-box text-center">
                <i className="fas fa-search search-icon text-muted"></i>
                <input
                    ref={inputRef}
                    className="search"
                    placeholder="جستجو کنید"
                    type="text"
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <br/>
            </div>

            <div className={`search-result ${searchResult ? "active" : ""}`}>
                <div className="text-center">
                    {filteredPlants.length > 0 ? (
                        filteredPlants.map((plant) => (
                            <div>
                                <div key={plant.id} className="search-result-item">
                                    <p className="m-0">{plant.name}</p>
                                </div>
                                <hr/>
                            </div>
                        ))
                    ) : (
                        <p>No matching plants found.</p>
                    )}
                    <br/>
                    <br/>
                </div>
            </div>
        </>
    );
};

export default Search;
