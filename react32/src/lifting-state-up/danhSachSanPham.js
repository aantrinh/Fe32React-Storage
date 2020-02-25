import React, { Component } from 'react';
import SanPham from './sanPham';
import data from './data.json';

export default class DanhSachSanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: data,
            detailProduct: data[0]
        };
    }

    handleDetail = (sanPham) => {
        // console.log(sanPham);
        this.setState({
            detailProduct: sanPham //cap nhat du lieu tu con sang lop cha
        });
    };
    renderHTML = () => {
        return this.state.mangSanPham.map((item, index) => {
            return <SanPham key={index} sanPham={item} detailProduct={this.handleDetail} />;
        });
    };

    render() {
        console.log(this.state.mangSanPham);
        let { detailProduct } = this.state;


        return (
            <div className="container">
                <div className="row">{this.renderHTML()} </div>
                <div className="row">

                    <div className="col -sm-5">
                        <img src={detailProduct.hinhAnh} alt="" />
                    </div>
                    <div className="col -sm-7">
                        <h3>THONG SO KY THUAT</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Man hinh</td>
                                    <td>{detailProduct.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>He dieu hanh</td>
                                    <td>{detailProduct.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera Sau</td>
                                    <td>{detailProduct.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>Camera Truoc</td>
                                    <td>{detailProduct.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{detailProduct.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{detailProduct.rom}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
