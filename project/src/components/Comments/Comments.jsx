import { useState } from 'react';
import './Comments.css';

export default function Comments() {

    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="comments">
            <form onSubmit={handleSubmit}>
            <input className="textBox" type="text" />
            <input className="enter" type="submit" value="enter" />
            </form>
        </div>
    )
}