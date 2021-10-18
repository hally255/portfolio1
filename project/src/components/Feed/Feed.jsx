import { useState } from "react";
import image from './dog.JPG';
import like from './like.png';
import './Feed.css';

export default function Feed(props) {

    const [likes, setLikes] = useState(0);

    return (
        <div className="feed">
            <h2>Look at my dog!!</h2>
            <img src={image} alt='cute dog' />
            <button onClick={() => {
                setLikes(likes + 1);
            }}><img src={like} alt="like" /></button>
            <p>{likes}</p>
        </div>
    )
}