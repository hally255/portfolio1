import { useState } from "react"

export default function DrinkMe() {
    const [size, setSize] = useState(1);
    return(
        <div className="">
            <p>{size}</p>
            <button onClick={ () => {
                setSize(size + 1);
            } }>Drink Me!</button>
        </div>
    )
}