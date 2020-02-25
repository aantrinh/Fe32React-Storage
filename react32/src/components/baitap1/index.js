import React from 'react';
import Header from "./header";
import Contents from "./contents";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function Baitap1() {
    return (<div>
        <Header />
        <div className= "contents">
            <Contents />
            <Sidebar />
        </div>
        <Footer />
    </div>);
}
