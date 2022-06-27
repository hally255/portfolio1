import { useState } from "react";
import image from './dog.JPG';
import './Feed.css';

export default function Feed(props) {

    const [likes, setLikes] = useState(0);

    return (
        <div className="feed">
            <h2>Look at my dog!!</h2>
            <h4>Posted: March 15, 2012</h4>
            <img src={image} alt='cute dog' />
            <p>This is Willy! He's the best dog in the world!!</p>
            <br />
            <button onClick={() => {
                setLikes(likes + 1);
            }}>Likes:  {likes}</button>
        </div>
    )
}