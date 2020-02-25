import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';



export default class BaiTapTruyenFunction extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-success">Bài Tập Truyền Function</h3>
                <DanhSachSanPham />
            </div>
        )
    }
}
