import { Component } from 'react';
import "./Header.css";

export default class Header extends Component {
   constructor(){
       super();

       this.state = {
           red: true
       }
   }

   changeColor(){
       this.setState({red: !this.state.red})
   }
   
    render() {
        let head_class = this.state.red ? "redBkgd" : "blueBkgd";

        return(
            <div className={head_class}>
                <h1 className="">Welcome to Wonderland!</h1>
                <button onClick={this.changeColor.bind(this)}>Click Me!</button>
            </div>
        )
    }
}