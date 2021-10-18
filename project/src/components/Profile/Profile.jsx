import { Component } from "react";
import './Profile.css';

export default class Profile extends Component {

    render(){
        return(
            <div>
                <div className="imgDiv">
                    <img src="" alt="user" />
                </div>
                <h1>{this.props.username}</h1>
            </div>
        )
    }
}