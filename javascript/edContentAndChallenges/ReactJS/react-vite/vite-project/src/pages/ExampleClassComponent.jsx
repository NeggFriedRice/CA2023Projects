import React from 'react'

export default class ExampleClassComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            counter: 1
        }
    }

    render() {
        return (
            <>
            <h1>Hello world, I mean {this.props.location}! (Class component)</h1>
            {this.props.children}
            <h3>Count: {this.state.counter}</h3>
            <button onClick={() => {
            this.setState({counter: 0})
            }}>
            Reset the count!
            </button>
            <button onClick={() => {
                this.setState((state, props) => {
                    return {
                        counter: state.counter + 1
                    }
                })}}>
            Click me
            </button>
            </>
        )
    }
}