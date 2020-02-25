import React, { Component } from 'react';
import phoneData from '../../../data/phoneData.json'
import SanPham from './SanPham.jsx';

export default class DanhSachSanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chiTietSanPham: phoneData[0]
        }
    }



    renderSanPham = () => {
        return phoneData.map((dt, index) => {
            return (
               <SanPham key={index} dt={dt} xemChiTiet={this.xemChiTiet}/>
            )

        })
    }

    // Du lieu can lay o component DanhSachSanPham => dat callback function tai DanhSachSanPham
    // xử lý button chi tiết
    xemChiTiet = (sanPham) => {
        console.log(sanPham);
        // Thay doi gia tri xemChiTiet
        this.setState({
            chiTietSanPham: sanPham
        })
    }
    render() {
        let { chiTietSanPham } = this.state;
        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <hr />
                <div className="row">
                    <div className="col-6 text-center">
                        <h3>{chiTietSanPham.tenSP}</h3>
                        <img src={chiTietSanPham.hinhAnh} width={250} height={300} />
                    </div>
                    <div className="col-6">
                        <h3>Chi tiết sản phẩm</h3>
                        <div className="table">
                            <tr>
                                <th>Màn hình</th>
                                <th>{chiTietSanPham.manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <th>{chiTietSanPham.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <th>{chiTietSanPham.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <th>{chiTietSanPham.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <th>{chiTietSanPham.ram}</th>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <th>{chiTietSanPham.rom}</th>
                            </tr>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
