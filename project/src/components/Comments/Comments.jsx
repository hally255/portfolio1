import './Comments.css';

export default function Comments() {

    let handleSubmit = (e) => {
        e.preventDefault();

        return(<p>{e.target.value}</p>);
    }

    return (
        <div className="comments">
            <form onSubmit={handleSubmit}>
            <input className="textBox" type="text" />
            <button className="enter" type="sumbit">Enter</button>
            </form>
        </div>
    )
}