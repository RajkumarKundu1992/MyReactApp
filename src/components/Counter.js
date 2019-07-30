import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.myValue,
            value: "rajkumar",
            reverse: "Help me reverse"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.title}
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Add</button ><br />
                <label id="num">{this.state.counter}</label><br />
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })} > Sub</button><br /><br />
                <input id="txt" type="text" name="text" value={this.state.value} onChange={this.handleChange} />

                <label id="lbl"> {this.getReverse()}</label>
                <label id="lbl"> {this.state.reverse}</label>
            </div>


        )
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    getReverse() {
        let returnVal = this.state.value;
        let spl = returnVal.split("");
        let rev = spl.reverse();
        returnVal = rev.join("");
        return returnVal;
    }

}
function handleClick() {
    alert("msg saved")
}



// var n = 0;

// function inc() {
//     document.getElementById("num").textContent = n++;
// }
// function dec() {

//     document.getElementById("num").textContent = --n;
// }
