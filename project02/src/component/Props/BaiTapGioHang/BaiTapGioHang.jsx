import React, { Component } from 'react';
import ModalGioHang from './ModalGioHang.jsx';
import DanhSachSanPhamGioHang from './DanhSachSanPhamGioHang.jsx';
import phoneData from '../../../data/phoneData.json';

export default class BaiTapGioHang extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gioHang: []
        }
    }
    // lấy dữ liệu tại component BaiTapGioHang
    themGioHang = (sanPhamChon) => {
        //   console.log(sanPhamChon)
        // B1: lấy sp được chọn tạo ra sp giỏ hàng
        let spGioHang = {
            maSP: sanPhamChon.maSP,
            tenSP: sanPhamChon.tenSP,
            giaBan: sanPhamChon.giaBan,
            hinhAnh: sanPhamChon.hinhAnh,
            soLuong: 1
        }
        // B2: kiểm tra spChon có trong giỏ hàng chưa?
        var gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
            // sản phẩm đc click đã có trong this.state.gioHang
            gioHangCapNhat[index].soLuong += 1;
        } else {
            // sản phẩm đc click chưa có trong this.state.gioHang
            gioHangCapNhat.push(spGioHang)
        }

        // cách 2: xóa giỏ hàng bằng filter
        // var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP)
        // set state để component render lại giao diện
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    // đặt sự kiện xóa sp tại btGioHang
    xoaGioHang = (maSP) => {
        // tìm trong giỏ hàng có sp có maSP được click thì xóa
        let gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        if (index !== maSP) {
            gioHangCapNhat.splice(index, 1)
        }
        //  cập nhật lại giỏ hàng và render lại giao diện
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    // tăng giảm số lượng sản phẩm trong giỏ hàng
    tangGiamSoLuong = (maSP, tangGiam) => { //tangGiam: true => tăng, false: giảm số lượng
        var gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP)
        if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            if (gioHangCapNhat[index].soLuong > 1) {
                gioHangCapNhat[index].soLuong -= 1
            }
        }
        // cập nhật lại giá trị và render lại giao diện
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {

        let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
            return tsl += spGH.soLuong;
        }, 0)

        return (
            <div className="container">
                <h3 className="text-center text-success">Bài Tập Giỏ Hàng</h3>
                <ModalGioHang tangGiamSoLuong={this.tangGiamSoLuong}  xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <div className="text-right"> <span className="text-danger" style={{
                    cursor: 'pointer',
                    fontSize: '17px', fontWeight: 'bolder'
                }} data-toggle="modal" data-target="#modelId" >Giỏ Hàng ({tongSoLuong}) </span> </div>
                <DanhSachSanPhamGioHang themGioHang={this.themGioHang} mangSanPham={phoneData} />

            </div>
        )
    }
}
