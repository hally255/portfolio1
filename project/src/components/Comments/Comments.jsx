import { useState } from 'react';
import './Comments.css';

export default function Comments() {

    const [comment, setComment] = useState([]);

    const addComment = () => {
        setComment([...comment, 'Entry ${comment.length}'])
    }

    return (
        <div className="comments">
            <form>
            <input className="textBox" type="text" value={comment} onChange={(e) => {
                setComment(e.target.value);
            }} />
            <input className="enter" type="button" onClick={addComment} value="enter" />
            </form>
            <div>{comment.map(entry => 
                <div>{entry}</div>)}</div>
        </div>
    )
}