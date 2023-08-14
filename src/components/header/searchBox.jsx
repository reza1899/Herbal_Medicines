import { useState } from "react";
import { planets } from "./../data.js"
const Search = () => {
    const [content, setContent] = useState("");
    const target = (query) => {
        setContent(query)
            }

    return (
        <>
            <div className="text-center mt-5">
                <input className="w-50" type="search" value={content} onChange={e => { target(e.target.value) }} />
                <br />
                <div>
                    {
                       content ? (
                        planets.filter( (item) => {
                            return item.name.toLocaleLowerCase().includes(content)
                        } ).map( (item) => (
                            <div>
                                {item.name}
                            </div>
                        ) )
                       ) : null
                       
                    }
                </div>
            </div>
        </>
    )
}
export default Search