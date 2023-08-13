import { useState } from "react";
import { planets } from "./../data.js"
const Search = () => {
    const [content, setContent] = useState("");
    const [newArr , setnewArr] = useState([])
    const target = (query) => {
        setContent(query)
        setnewArr(
            planets.filter((item) => {
                return item.name.toLocaleLowerCase().includes(content)
            })
        )
        console.log(newArr)
    }

    return (
        <>
            <div className="text-center mt-5">
                <input className="w-50" type="search" value={content} onChange={e => { target(e.target.value) }} />
                <br />
                {content}
                <div>
                    {
                        // planets.map((item) => (
                        //     <div>
                        //         {item.name}
                        //     </div>
                        // ))
                        
                       
                    }
                </div>
            </div>
        </>
    )
}
export default Search