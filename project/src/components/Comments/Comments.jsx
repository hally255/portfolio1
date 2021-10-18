import { useState } from 'react';
import './Comments.css';

export default function Comments() {

    const [comment, setComment] = useState(""); 
    const [array, setArray] = useState([]);

    return (
        <div className="comments">
            <form>
            <input className="textBox" type="text" onFocus={(e) => {
                setComment(e.target.value);
                console.log(comment);
                setArray(array.concat(comment))
            }
            }/>
            <button type="submit" className="enter">Enter</button>
            </form>
            <div>{
                array.map((element) => {
                    return(<p>{element}</p>)
                })
}           </div>
        </div>
    )
}