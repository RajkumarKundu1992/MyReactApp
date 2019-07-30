import React, { Component } from 'react'

export default class Button extends Component {
    constructor() {
        super();
        this.state = { result: "" }
    }
    render() {
        return (
            <div>

                <input type="text" id="res" value={this.state.result} />
                <button onClick={() => this.setState({ result: eval(this.state.result) })}>=</button><br />
                <button onClick={() => this.setState({ result: this.state.result + 1 })}>1</button>
                <button onClick={() => this.setState({ result: this.state.result + 2 })}>2</button>
                <button onClick={() => this.setState({ result: this.state.result + 3 })}>3</button><br />
                <button onClick={() => this.setState({ result: this.state.result + 4 })}>4</button>
                <button onClick={() => this.setState({ result: this.state.result + 5 })}>5</button>
                <button onClick={() => this.setState({ result: this.state.result + 6 })}>6</button><br />
                <button onClick={() => this.setState({ result: this.state.result + 7 })}>7</button>
                <button onClick={() => this.setState({ result: this.state.result + 8 })}>8</button>
                <button onClick={() => this.setState({ result: this.state.result + 9 })}>9</button>
                <button onClick={() => this.setState({ result: this.state.result + 0 })}>0</button><br />
                <button onClick={() => this.setState({ result: this.state.result + "+" })}>+</button>
                <button onClick={() => this.setState({ result: this.state.result + 1 })}>-</button>
                <button onClick={() => this.setState({ result: this.state.result + 1 })}>*</button>
                <button onClick={() => this.setState({ result: this.state.result + 1 })}>/</button><br />


                <label></label>
            </div>
        );
    }

}




