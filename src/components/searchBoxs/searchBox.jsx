import {useContext, useRef, useState} from "react";
import {plants} from "../../service/data";
import {useNavigate } from "react-router-dom";
import "./search.css";
import contextApi from "./../../context/contextApi";

const Search = () => {
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState(false);
    const inputRef = useRef(null);

    const handleFocus = () => {
        const searchBox = document.getElementById("searchBox");
        const searchText = searchBox.value;
        if (searchText.trim() === "") {
            setSearchResult(false)
        } else {
            setSearchResult(true);
        }
    };

    const handleBlur = () => {
        setSearchResult(false);

    };

    const {setFilteredPlants, filteredPlants} = useContext(contextApi);

    const searching = (value) => {
        value ?
            setFilteredPlants(plants.filter((plant) => plant.name.includes(value))) :
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
                    id="searchBox"
                    ref={inputRef}
                    className="search"
                    placeholder="جستجو کنید"
                    type="text"
                    onChange={handleInputChange}
                    onInput={handleFocus}
                    onBlur={handleBlur}
                />
                <br/>
            </div>

            <div className={`search-result ${searchResult ? "active" : ""}`}>
                <div className="text-center">
                    {filteredPlants.length > 0 ? (
                        filteredPlants.map((plant) => (
                            <div>
                                <div onClick={() => navigate(`/view/${plant.name}`) } key={plant.id} className="search-result-item">
                                    <p className="m-0">{plant.name}</p>
                                    {/*<img src="../../../images/plants/hel.png" alt="" />*/}
                                    <img src={plant.avatarUrl} alt=""/>
                                </div>
                                <hr/>
                            </div>
                        ))
                    ) : (
                        <p className="text-muted fs-3">موردی یافت نشد ☹️ </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Search;
