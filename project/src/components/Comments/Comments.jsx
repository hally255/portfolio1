import { useState } from 'react';
import './Comments.css';

export default function Comments() {

    const [comment, setComment] = useState([]);

    return (
        <div className="comments">
            <input className="textBox" type="text" onBlur={(e) => {
                console.log(e.target.value);
                setComment(comment.push(e.target.value));
            }
            } />
        </div>
    )
}