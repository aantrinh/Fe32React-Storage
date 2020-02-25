import React, { Component } from 'react'

export default class LaptopProduct extends Component {
    render() {
        // cú pháp boc tach trong es6
        let { item } = this.props;
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light">
                        <img className="card-img-top" src={item.hinhAnh} style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{item.tenSP}</h4>
                            <p className="card-text">{item.moTa}</p>
                            <a href="#" className="btn btn-primary">Detail</a>
                            <a href="#" className="btn btn-danger">Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
