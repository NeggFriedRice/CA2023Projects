import React from 'react'

export default class ExampleClassComponent extends React.Component {
    render() {
        return (
            <h1>Hello world, I mean {this.props.location}! (Class component)</h1>
        )
    }
}