import {useState} from "react";
import data from "./../data"
const Search = () => {
    const [content, setContent] = useState("reza");
    const handleChange = (e) => {
        let Entrance = e.target.value
        if ()
    }
return(
    <>
         <div className="text-center mt-5">
               <input className="w-50" type="search" value={content} onChange={(e) => setContent(e.target.value)}/>
               <br />
               { content }
               {content}
           </div>
    </>
)
}
export default Search