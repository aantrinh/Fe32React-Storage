import React, { Component } from 'react';
import {connect} from 'react-redux';
import *as action from '../../redux/action/index';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: ""
        }
    };

    handleOnchange = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault(); //su kien giup khong load lai trang
        this.props.login(this.state, this.props.history);
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-6 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="taiKhoan"
                                onChange={this.handleOnchange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                name="matKhau"
                                onChange={this.handleOnchange}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">
                            Login
                </button>
                    </form>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user, history) => { //user: chua taikhoan, matkhau
            dispatch(action.actLogin(user, history));
        }
    };
};


export default connect(null, mapDispatchToProps) (Admin);