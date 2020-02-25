import React, { Component } from "react";

class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER"
    };
    console.log("constructor");
  };

  handleOnChange = (event) => {
    console.log(event.target.value);
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      // username: value cách cập nhật cũ 
      // cách cập nhật state mới trong form: mutil
      [name]: value
    },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = e => {
    console.log(this.state);
    // tranh load lai trang web
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  componentWillReceiveProps(nextProps) {
    // console.log("componentWillReceiveProps");
    // nếu props thay đổi từ cha truyền vào thì sẽ chạy
    console.log(nextProps);
    if (nextProps && nextProps.userEdit) {
      // UPDATE 
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type
      });
    } else {
      // ADD USER
      this.setState({
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER"
      });
    };
  };


  render() {
    console.log("render");
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {/* dùng toán tử 3 ngôi để edit text nếu đúng thì editedit user sai thì add user */}
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.handleOnChange} value={this.state.username} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" onChange={this.handleOnChange} value={this.state.name} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleOnChange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.handleOnChange} value={this.state.phoneNumber} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.handleOnChange} value={this.state.type} >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
