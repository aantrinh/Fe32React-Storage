import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableSinhVien extends Component {

    renderSinhVien = () => {
        const { mangSinhVien } = this.props;
        return mangSinhVien.map((sinhvien, index) => {
            return (
                <tr className="text-center">
                    <td>{sinhvien.maSV}</td>
                    <td>{sinhvien.hoTen}</td>
                    <td>{sinhvien.email}</td>
                    <td>{sinhvien.soDienThoai}</td>
                </tr>
            )
        })
    }
    render() {
        // console.log(this.props.mangSinhVien)
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className="bg-dark text-white text-center">
                            <th>Mã Sinh Viên</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                        </tr>
                    </thead>
                    <tbody  key="index" >
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps, null)(TableSinhVien)