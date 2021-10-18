import { useState } from "react"

export default function Feed(props) {

    const [likes, setLikes] = useState(0);

    return (
        <div className="feed">
            <h2>Look at my dog!!</h2>
            <img src='./dog.JPG' alt='cute dog' />
        </div>
    )
}