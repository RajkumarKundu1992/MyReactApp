import React, { Component } from 'react'
import Counter from './Counter';
import Button from './Button';

export default class Main extends Component {
    constructor() {
        super();
        this.state = { currentComponent: 1 };
        this.handlePage = {}
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ currentComponent: this.state.currentComponent + 1 })}>Add1</button>
                <button onClick={() => this.setState({ currentComponent: this.state.currentComponent - 1 })}>Sub1</button>


                <br />
                <button onClick="">go to next</button>


                <br />

                {
                    this.state.currentComponent
                }
                {
                    this.state.currentComponent === 1 ? <Counter myValue={6} title="counter program" /> : null
                }

                {
                    this.state.currentComponent === 2 ? <Button /> : null
                }

            </div>
        )
    }
}
