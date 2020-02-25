import React, { Component } from 'react';
import data from '../../data/data.json';

export default class BaitapVongLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangPhim: data
        }
    }

    renderMangPhim = () => {
        return this.state.mangPhim.map((item, index) => {
            return (
                <div className="card col-4" key={index}>
                    <img className="card-img-top" src={item.hinhAnh} alt={item.BiDanh} width={100} height={450} />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenPhim}</h4>
                        <p className="card-text">{item.moTa.length > 100 ? item.moTa.substr(0, 100) + '...' : item.moTa}</p>
                    </div>
                </div>
            )
        })
    }
    render() {
        console.log(this.state.mangPhim);
        return (
            <div className="container">
                <div className="row">
                    {this.renderMangPhim()}
                </div>
            </div>
        )
    }
}
