import React, { Component } from 'react'
import ModalGioHangRedux from './ModalGioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

export default class BTGioHangRedux extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-danger text-center">Bai Tap Gio Hang Redux</h3>
                <ModalGioHangRedux/>
                <DanhSachSanPhamRedux/>
            </div>
        )
    }
}
