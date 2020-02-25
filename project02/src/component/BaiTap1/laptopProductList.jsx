import React, { Component } from 'react';
import LaptopProduct from './laptopProduct.jsx';

export default class ProductList extends Component {
    
    renderLapTop =()=>{
        let mangLapTop = this.props.mangLapTop;
        return mangLapTop.map((item,index)=>{
            return(
                <LaptopProduct item={item} key={index}/>
            )
        })
    }

    render() {
        return (
            <div className="container pt-5 pb-5">
                <h3 className="text-center">BEST LAPTOP</h3>
                <div className="row">
                    {this.renderLapTop()}
                </div>
            </div>
        )
    }
}
