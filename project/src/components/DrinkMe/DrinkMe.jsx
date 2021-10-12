import { Component } from "react";
import './DrinkMe.css';

export default class DrinkMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: 1
        }
    }


    render() {
        return(
            <div className="drinkMe">
                <button onClick={ () => {
                   if(this.state.size < 50) {
                    this.setState({size: this.state.size + 1});
                   } else {
                       this.setState({size: 1});
                   }
                } }>Drink Me!</button>

                <button onClick={() => {
                    if(this.state.size < 50) {
                        this.setState({size: this.state.size - 1});
                       } else {
                           this.setState({size: 1});
                       }
                }}>Eat Me!</button>

                <p style={{ fontSize: (this.state.size)}}>{this.state.size}</p>
            </div>
        )
    }
}