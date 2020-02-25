import React, { Component, PureComponent } from 'react'

export default class Pure extends PureComponent {
    render() {
        console.log("Pure Render");
        return (
            <div> Pure Component</div>
        )
    }
}
