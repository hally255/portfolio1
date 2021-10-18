import { Component } from "react";

export default class Chat extends Component  {
    constructor(props) {
        super(props);
        this.state ={value: ''}
    }

    render() {
        return (
            <div className="chatBox">
                <input type="text" onChange={() => {
    
                }} />
            </div>
        )
    }
}