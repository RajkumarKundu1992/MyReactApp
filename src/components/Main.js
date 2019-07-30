import React, { Component } from 'react'
import Counter from './Counter';
import Button from './Button';

export default class Main extends Component {
    constructor() {
        super();
        this.state = { currentComponent: null };
        this.handlePage = {}
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ currentComponent: "counter" })}>Counter</button>
                <button onClick={() => this.setState({ currentComponent: "calci" })}>Calculator</button>

                <br />
                {
                    this.state.currentComponent === "counter" ? <Counter myValue={6} title="counter program" /> : null
                }
                {
                    this.state.currentComponent === "calci" ? <Button /> : null
                }
            </div>
        )
    }
}
