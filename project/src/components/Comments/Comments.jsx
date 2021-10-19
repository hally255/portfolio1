import { useState } from 'react';
import './Comments.css';

export default function Comments() {

    const [comment, setComment] = useState([]);
    const [type, setType] = useState("");

    return (
        <div className="comments">
            <form>
            <input className="textBox" type="text" onChange={(e) => {
                setType(e.target.value);
                console.log(type);
            }
            }/>
            <button className="enter" onSubmit={() => {
                setComment(comment.concat(type));
                console.log(comment);
            }}>Enter</button>
            </form>
            <div className="section">{
                comment.map((element) => {
                    return(<p>{element}</p>)
                })
}           </div>
        </div>
    )
}