import { useState } from 'react';
import './Comments.css';

export default function Comments() {

    const [comment, setComment] = useState([]);

    return (
        <div className="comments">
            <form>
            <input className="textBox" type="text" onBlur={(e) => {
                setComment(comment.concat(e.target.value));
                console.log(comment);
            }
            }/>
            <button className="enter">Enter</button>
            </form>
            <div className="section">{
                comment.map((element) => {
                    return(<p>{element}</p>)
                })
}           </div>
        </div>
    )
}