import React, { Component } from "react";
import Header from "./header";
import Slide from "./slide";
import Whatwedo from "./what-we-do";
import Contact from "./contact";
import List from "./list";
import Footer from "./footer";

export default class BaiTap2 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slide />
                <div className="row">
                    <Whatwedo />
                    <Contact />
                </div>
                <List />
                <Footer />
            </div>);
    }
}