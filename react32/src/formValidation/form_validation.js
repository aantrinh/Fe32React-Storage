import React, { Component } from "react";

export default class FormValidation extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            values: {
                manv: "",
                tennv: "",
                email: ""
            },
            error: {
                manv: "",
                tennv: "",
                email: ""
            },
            formValid: false,
            manvValid: false,
            tennvValid: false,
            emailValid: false
        };
    };

    handleOnChangle = event => {
        let { name, value } = event.target;
        this.setState({
            values: { ...this.state.values, [name]: value }
        }, () => {
            console.log(this.state);
        })
    };

    handleErrors = event => {
        let { name, value } = event.target;

        let message = value === "" ? name + " Không được rỗng" : "";

        let { manvValid, tennvValid, emailValid } = this.state;

        switch (name) {
            case "manv":
                manvValid = message === "" ? true : false;
                if(value && value.length < 4){
                    message = "Độ dài ký tự > 4";
                    manvValid = false;
                }
                break;
            case "tennv":
                tennvValid = message === "" ? true : false;
                break;
            case "email":
                emailValid = message === "" ? true : false;
                if(value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                    message = "Email không hợp lệ";
                    emailValid = false;
                }
                break;
        }

        this.setState({
            error: { ...this.state.error, [name]: message },
            manvValid,
            tennvValid,
            emailValid
        }, () => {
            this.formValidation();
        }
        )
    };

    formValidation = () => {
        this.setState({
            formValid: this.state.manvValid && this.state.tennvValid && this.state.emailValid
        },
        ()=>{
            console.log(this.state);
        }
        );
    };

    render() {
        return (
            <div className="container">
                <h3 className="title">*FormValidation</h3>
                <form>
                    <div className="form-group">
                        <label>Mã Nhân ViênViên</label>
                        <input type="text"
                            className="form-control"
                            name="manv"
                            onChange={this.handleOnChangle}
                            onBlur={this.handleErrors}
                            onKeyUp={this.handleErrors}
                        />
                        {this.state.error.manv === "" ? "" : (<div className="alert alert-danger">{this.state.error.manv}</div>)}
                    </div>
                    <div className="form-group">
                        <label>Tên Nhân ViênViên</label>
                        <input type="text"
                            className="form-control"
                            name="tennv"
                            onChange={this.handleOnChangle}
                            onBlur={this.handleErrors}
                            onKeyUp={this.handleErrors}
                        />
                        {this.state.error.tennv === "" ? "" : (<div className="alert alert-danger">{this.state.error.tennv}</div>)}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                            className="form-control"
                            name="email"
                            onChange={this.handleOnChangle}
                            onBlur={this.handleErrors}
                            onKeyUp={this.handleErrors}
                        />
                        {this.state.error.email === "" ? "" : (<div className="alert alert-danger">{this.state.error.email}</div>)}
                    </div>
                    <button type="submit" className="btn btn-success" disabled={!this.state.formValid}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

