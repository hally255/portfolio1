import { useState } from 'react';
import './Comments.css';

export default function Comments() {

    const [comment, setComment] = useState("");

    return (
        <div className="comments">
            <form>
            <input className="textBox" type="text" onFocus={(e) => {
                setComment(e.target.value);
                console.log(comment);
            }
            }/>
            <button type="submit" className="enter">Enter</button>
            </form>
            <p>{comment}</p>
        </div>
    )
}