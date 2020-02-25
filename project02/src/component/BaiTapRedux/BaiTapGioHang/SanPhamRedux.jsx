import React, { Component } from 'react';
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        const { sanPham } = this.props
        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={sanPham.hinhAnh} width={90} height={300} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                    <button className="btn btn-outline-info" onClick={() => { this.props.themGioHang(sanPham) }}>Them Gio Hang</button>
                    
                </div>
            </div>

        )
    }

}
// xay dung ham tao ra props la ham xu ly su kien => dua du lieu len store

const mapDispatchToProps = (dispatch) => {
    return {
        // tao ra props component (la function => dua du lieu len store)
        themGioHang: (sanPham) => {
            const spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                giaBan: sanPham.giaBan
            }
            // tao action dua du lieu len renducer
            const action = {
                type: 'THEM_GIO_HANG', // bat buoc
                spGioHang: spGioHang // noi dung gui len reducer
            }
            console.log(action)
            // dung ham dispatch de dua du lieu action len reducer
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)