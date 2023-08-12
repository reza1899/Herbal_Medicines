import {useState} from "react";
const Main = () => {
    const [content, setContent] = useState("dfsd");
    return (
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
export default Main