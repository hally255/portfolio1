import './Comments.css';

export default function Comments() {

    return (
        <div className="comments">
            <form>
            <input className="textBox" type="text" placeholde="Comments..." />
            <input className="enter" type="submit" value="Enter" onSubmit={(c) => {
                
            }} />
            </form>
        </div>
    )
}