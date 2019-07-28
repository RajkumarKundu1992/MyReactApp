import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: props.myValue }

    }

    render() {
        return (
            <div>
                {this.props.title}
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Add</button ><br />
                <label id="num">{this.state.counter}</label><br />
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })} > Sub</button><br /><br />
                <input id="txt" type="text" name="text" placeholder="enter text" onChange={reverseInput} />

                <label id="lbl"> Reverse String will display here</label>
            </div>


        )
    }

}
function handleClick() {
    alert("msg saved")
}


function reverseInput(r) {
    var a = document.getElementById("txt").value;
    // document.getElementById("lbl").textContent = a.split('').reverse().join('');
    var o = '';
    for (var i = a.length - 1; i >= 0; i--)
        o += a[i];

    document.getElementById("lbl").textContent = o;
}
// var n = 0;

// function inc() {
//     document.getElementById("num").textContent = n++;
// }
// function dec() {

//     document.getElementById("num").textContent = --n;
// }
