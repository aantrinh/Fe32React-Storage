import React, { Component } from 'react'

// ket noi redux (connect ham ket noi reactComponent -reduxStore)
import { connect } from 'react-redux';

class ModalGioHangRedux extends Component {
    renderGioHang = () => {
        // this.props.gioHang la thuoc tinh nhan tu Redux
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} alt="" width={80} height={110} /></td>
                <td>
                    <button onClick={() => this.props.tangGiam(index, false)}>-</button>
                    {spGH.soLuong}
                    <button onClick={() => this.props.tangGiam(index, true)}>+</button>
                    {/* <button onClick={()=>this.props.tangGiam(spGH.maSP, false)}>-</button>
                    {spGH.soLuong}
                    <button onClick={()=>this.props.tangGiam(spGH.maSP, true)}>+</button> */}
                </td>
                <td>{spGH.giaBan}</td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td>
                    {/* <button className="btn btn-danger"
                     onClick={()=>this.props.xoaGioHang(index)}>Xoa</button> */}
                    <button className="btn btn-danger"
                        onClick={() => this.props.xoaGioHangMaSP(spGH.maSP)}>Xoa</button>
                </td>
            </tr>
        })
    }
    render() {

        return (
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Ma SP</th>
                            <th>Ten SP</th>
                            <th>Hinh Anh</th>
                            <th>So Luong</th>
                            <th>Gia Ban</th>
                            <th>Thanh Tien</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Tong Cong: </td>
                            <td>{this.props.gioHang.reduce((tongTien, spGH, index) => {
                                return (tongTien += spGH.soLuong * spGH.giaBan)
                            }, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {  //state: store tổng, => truy xuất đến GioHangReducer => biến state trên GioHangReducer
    return {
        gioHang: state.GioHangReducer.gioHang // tạo ra 1 props của component ModalGioHangRedux
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // xoaGioHang: (index)=>{
        //     // b1: tạo action
        //     const action ={
        //         type: 'XOA_GIO_HANG',
        //         index
        //     }

        //     // b2: đưa action lên reducer
        //     dispatch(action)
        // },
        xoaGioHangMaSP: (maSP) => {
            // b1: tao action
            const action = {
                type: 'XOA_GIO_HANG_MSP',
                maSP
            }

            // b2: đưa action lên reducer
            dispatch(action)
        },
        tangGiam: (index, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                index,
                tangGiam
            }
            dispatch(action)
        },
        // tangGiam: (maSP,tangGiam)=>{
        //     const action = {
        //         type: 'TANG_GIAM_SL',
        //         maSP,
        //         tangGiam
        //     }
        //     dispatch(action)
        // }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux)