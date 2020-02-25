import React, { Component } from 'react'

export default class SanPham_RCC extends Component {
    constructor(props){
        super(props);
    }
    render() {

        // sử dụng thuộc tính phốc tách phần tử để rút gọn code
        const {phim_input}=this.props;
        const {tenPhim, hinhAnh, moTa} = phim_input;
        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{tenPhim}</h4>
                    <p className="card-text">{moTa}</p>
                </div>
            </div>
        )
    }
}
