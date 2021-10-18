import { useState } from "react";
import image from './dog.JPG';
import './Feed.css';

export default function Feed(props) {

    //const [likes, setLikes] = useState(0);

    return (
        <div className="feed">
            <h2>Look at my dog!!</h2>
            <img src={image} alt='cute dog' />
        </div>
    )
}