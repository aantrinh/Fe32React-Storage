import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSinhVien extends Component {
    state = {
        value: {
            maSV: '',
            hoTen: '',
            email: '',
            soDienThoai: ''
        },
        error: {
            maSV: '',
            hoTen: '',
            email: '',
            soDienThoai: ''
        },
        valids: false

    }

    handleChange = (e) => {
        // lấy giá trị mỗi lần value input thay đổi bởi người dùng
        let tagInput = e.target;
        let { name, value, type, pattern } = tagInput;
        let errorMessage = '';
        // kiểm tra rỗng
        if (value.trim() === '') //Kiểm tra bất kỳ control input nào người dùng nhập vào đều kt rỗng
        {
            errorMessage = name + ' không được bỏ trống!'
        }
        let valueUpdate = { ...this.state.value, [name]: value }; //cập nhật giá trị value cho state
        let errorUpdate = { ...this.state.error, [name]: errorMessage } // đây là cập nhật lối cho state

        // kiểm tra email
        if (type === 'email') {
            const regex = new RegExp(pattern)
            if (!regex.test(value)) {
                errorMessage = name + ' không đúng định dạng!'
            }
        }
        // kiem tra so dien thoai
        if (name === 'soDienThoai') {
            const regex = new RegExp(pattern)
            if (!regex.test(value)) {
                errorMessage = name + ' không đúng định dạng!'
            }
        }
        this.setState({
            ...this.state,
            value: valueUpdate,
            error: errorUpdate
        }, () => {
            console.log(this.state)
            this.checkValid();
        })
        console.log(tagInput)
    }

    handleSubmit = (e) => {
        e.preventDefault(); // cản sự kiện reload lại trang của browser
        this.props.themSinhVien(this.state.value);
    }

    checkValid = () => {
        let valid = true;
        for (let key in this.state.error) {
            if (this.state.error[key] !== '' || this.state.value[key] == '') {
                valid = false;
            }
        }
       this.setState({
           ...this.state,
            valids: valid
       })
    }

    render() {
        return (
            <div className="container">
                <div className="card text-left">
                    <div className="card-header bg-dark text-white text-center"><h3>Thông tin Sinh viên</h3></div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã SV</span>
                                    <input className="form-control" name="maSV" value={this.state.value.maSV} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.error.maSV}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ Tên</span>
                                    <input className="form-control" name="hoTen" value={this.state.value.hoTen} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.error.hoTen}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input
                                        className="form-control"
                                        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                                        name="email"
                                        type="email"
                                        value={this.state.value.email}
                                        onChange={this.handleChange}
                                    />
                                    <p className="text-danger">
                                        {this.state.error.email}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Số Điện Thoại</span>
                                    <input
                                        className="form-control"
                                        type="number"
                                        pattern="^(0|[1-9][0-9]*)$"
                                        name="soDienThoai"
                                        value={this.state.value.soDienThoai}
                                        onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.error.soDienThoai}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    {this.state.valids ? <button className="btn btn-warning" type="submit">Thêm sinh viên</button>:
                                    <button className="btn btn-danger" type="submit" disabled>Thêm sinh viên</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        themSinhVien: (sinhVien) => {
            const action = {
                type: 'THEM_SINH_VIEN',
                sinhVien
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(FormSinhVien)