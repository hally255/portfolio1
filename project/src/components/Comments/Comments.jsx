import { useState } from 'react';
import './Comments.css';

export default function Comments() {

    const [comment, setComment] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="comments">
            <form onSubmit={handleSubmit}>
            <input className="textBox" type="text" value={comment} onChange={(e) => {
                setComment(e.target.value);
            }} />
            <input className="enter" type="submit" value="Enter" />
            </form>

        </div>
    )
}