import React, { useState,useEffect } from "react";
import { planets } from "../../service/data";
import "./search.css";

const Search = () => {
    const [content, setContent] = useState("");
    const [planet, setPlanet] = useState([]);
    useEffect(() => {
        console.log(content)
        setPlanet(() => {
            return planets.filter((item) => {
                return item.name.includes(content)
            })
        })

    },[content])
    return (
        <>
            <div className="search-box text-center">
                <i className="fas fa-search search-icon text-muted"></i>
                <input
                    className="search"
                    placeholder="جستجو کنید"
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}

                />
                <br />
                <div>
                    <ul>
                        {
                            content ? planet.map((item, index) => {
                                return <li key={index}>{item.name}</li>

                            })
                            : null
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Search;