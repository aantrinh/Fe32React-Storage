import React, { Component } from 'react';
import Child from './child';
import Pure from './pure';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"child"
        };
        console.log("constructor");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidMount() {
        console.log("componetDidMount");
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        if (nextState.name === "Andy") {
            return false;
        }
        return true;
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1 className="title">LifeCycle</h1>
                <button className="btn btn-success"
                    onClick={() => { this.setState({ name: "Andy" }) }}
                >Click</button>
                <Child name={this.state.name}/>
                <Pure />
            </div>
        );
    }
}