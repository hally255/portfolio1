import './Comments.css';

export default function Comments() {

    return (
        <div className="comments">
            <form >
            <input className="textBox" type="text" />
            <button className="enter" onClick={(e) => {
                return(<p>{e.target.value}</p>)
            }}>Enter</button>
            </form>
        </div>
    )
}