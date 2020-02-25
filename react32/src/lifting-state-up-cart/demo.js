import React, { Component } from 'react'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="greeting">
                <h3>Hello {this.props.fullName} </h3>
                <p>this is a example for Props Component</p>
            </div>
        )
    }
}
