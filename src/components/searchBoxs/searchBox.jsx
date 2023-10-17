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
    const [lastSearches, setLastSearches] = useState([]);

    const {setFilteredPlants} = useContext(contextApi);
    let FilteredTimeout;
    const searching = (value) => {
        lastSearches.push(value);
        console.log(lastSearches)
        clearTimeout(FilteredTimeout); // Clear the timeout
        FilteredTimeout = setTimeout(() => {
            setFilteredPlants(plants.filter((plant) => {
                return plant.name.toLowerCase().includes(value.toLowerCase());
            }));
        }, 1000);
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
                    onChange={event => searching(event.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <br/>
            </div>

                    <div className={`search-result ${searchResult ? 'active' : ''}`}>
                        reza is good
                    </div>

        </>
    );
};

export default Search;