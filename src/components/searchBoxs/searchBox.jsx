import { useContext,useRef, useState } from "react";
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


    const {setFilteredPlants ,setSearchValue ,searchValue} = useContext(contextApi);
    let FilteredTimeout;
    const searching = () => {
        clearTimeout(FilteredTimeout)
        FilteredTimeout = setTimeout(() => {
            setFilteredPlants(plants.filter((plant) => {
                return plant.name.toLowerCase().includes(searchValue)
            }))
        }, 1000)

    }
    return (
        <>
            <div className="search-box text-center">
                <i className="fas fa-search search-icon text-muted"></i>
                <input
                    ref={ inputRef }
                    className="search"
                    placeholder="جستجو کنید"
                    type="text"
                    onChange={event => searching(setSearchValue(event.target.value))}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <br/>
            </div>
            {
                searchResult ? (
                    <div className="search-result">
                        reza is good
                    </div>
                ) : null
            }
        </>
    );
};

export default Search;