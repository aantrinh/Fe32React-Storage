import React, { useState, useEffect, Fragment } from 'react';
// ket noi react component voi redux store
import { connect } from 'react-redux';
import axios from 'axios';
import { layDanhSachNguoiDungAction, themNguoiDungAction } from '../../redux/action/userAction';

function ThemNguoiDung(props) {

    //state: tương tự thuộc tính this.state(rcc)
    // setState: tương tự phương thức this.setState (rcc) 
    // useState({state mặc định}): là 1 hook function do thư viện react định nghĩa

    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: '',
        hoTen: '',
        email: '',
        soDT: '',
        maNhom: '',
        maLoaiNguoiDung: ''
    });

    const [dsNguoiDung, setDsNguoiDung] = useState([]);
    const handleChange = e => {
        let { value, name } = e.target;
        setState({
            ...state,
            [name]: value
        })
        console.log(state);
    };
    // su dung useEffect(callBack, []) thay cho componentDidMount()
    useEffect(() => {
        // goi api lay data tu backend => gan vao dsNguoiDung
      props.layDanhSachNguoiDung(); // ham tu mapDispatchToProps
    }, []);

    console.log(props.danhSachNguoiDung);

    const handleSubmit = (e) =>{
        // chan su kien submit browser
        e.preventDefault(e);
        // goi action dua du lieu ve backend
        console.log(state)
        props.themNguoiDung(state);
    };

    return (
        <Fragment>
            <form className="container" onSubmit={handleSubmit}>
                <h3> ThemNguoiDung</h3>
                <div className="form-group">
                    <span >Tai Khoan</span>
                    <input className="form-control" name="taiKhoan" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span >Mat khau</span>
                    <input className="form-control" name="matKhau" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span >Ho Ten</span>
                    <input className="form-control" name="hoTen" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span >Email</span>
                    <input className="form-control" name="email" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span >So dien thoai</span>
                    <input className="form-control" name="soDT" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span >Ma nhom</span>
                    <input className="form-control" name="maNhom" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <span >Ma loai nguoi dung</span>
                    <input className="form-control" name="maLoaiNguoiDung" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Them nguoi dung</button>
                </div>
            </form>
            <div className="container">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        Danh Sách Người Dùng
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Tài Khoản</th>
                                    <th>Mật Khẩu</th>
                                    <th>Email</th>
                                    <th>Họ Tên</th>
                                    <th>Ma loai nguoi dung</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.danhSachNguoiDung.map((nguoiDung, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{nguoiDung.taiKhoan}</td>
                                                <td>{nguoiDung.matKhau}</td>
                                                <td>{nguoiDung.email}</td>
                                                <td>{nguoiDung.hoTen}</td>
                                                <td>{nguoiDung.maLoaiNguoiDung}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer text-muted">
                        Footer
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
//lay state tu redux ve (state.userReducer.danhSachNguoiDung)

const mapStateToProps = (state) => { //state ung vs rootReducer
    return {
        danhSachNguoiDung: state.userReducer.danhSachNguoiDung
    }
};
// Tao ra props.layDanhSachNguoiDung => call api thong qua action layDanhSachNguoiDungAction
const mapDispatchToProps = dispatch =>{
    return {
        layDanhSachNguoiDung: ()=>{
            //goi ten action ajax lay du lieu tu api 
            dispatch(layDanhSachNguoiDungAction());
        },
        themNguoiDung: (nguoiDung)=>{
            //goi ten action ajax lay du lieu tu api 
            dispatch(themNguoiDungAction(nguoiDung));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemNguoiDung);