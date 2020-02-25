import React, { Component } from "react";
import ItemCard from "./itemCard";

export default class List extends Component {
    render() {
        return (
        <div className="row">
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>);
    }
}