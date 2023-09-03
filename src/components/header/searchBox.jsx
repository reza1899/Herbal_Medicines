import { useState } from "react";
import { planets } from "./../../service/data"
import "./header.css"

const Search = () => {
    const [content, setContent] = useState("");

    const target = (query) => {
        setContent(query)
    }

    return (
        <>
            <div className="search-box text-center ">
            <i className="fas fa-search search-icon text-muted"></i> {/* Add FontAwesome search icon */}
                <input
                    className="search"
                    placeholder="جستجو کنید"
                    type="search"
                    value={content}
                    onChange={e => { target(e.target.value) }}
                />
                <br />
                <div>
                    {content ? (
                        planets.filter((item) => {
                            return item.name.toLowerCase().includes(content)
                        }).map((item) => (
                            <div key={item.id}>
                                {item.name}
                            </div>
                        ))
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Search
