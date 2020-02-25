import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Trinh Hoai An",
          username: "anht",
          email: "anht7198@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      keyword: "",
      userEdit: null
    };
  };

  // chức năng thêm
  handleOnSubmit = (user) => {
    if (user.id) {
      // update user
      /**
       * 0. tạo mảng mới, copy từ mảng userList
       * 1. tìm vị trí cần update
       * 2. userList[viTri] = user
       * 3. setstate cập nhật lại state để render chạy lại
       */
      let userList = [...this.state.userList]
      let index = this.timViTri(user.id)
      if (index !== -1) {
        userList[index] = user;
      }
      this.setState({
        userList,
        userEdit: user
      });

    } else {
      // add user
      // console.log(user);
      user.id = Math.random();
      let userList = [...this.state.userList, user]
      this.setState({
        userList
      });
    }
  };

  // chức năng xóa
  handleDelete = (user) => {
    // console.log(user);
    let userList = [...this.state.userList];
    let index = this.timViTri(user.id);
    if (index !== -1) {
      userList.splice(index, 1);

      this.setState({
        userList
      });
    }
  };

  // Tìm vị trí
  timViTri = id => {
    return this.state.userList.findIndex(user => user.id === id);
  }

  // search
  handleSearch = (keyword) => {
    console.log(keyword);
    this.setState({
      keyword
    });
  };

  // edit
  handleGetUserEdit = user => {
    // console.log(user);
    this.setState({
      userEdit: user
    })
  };

  render() {
    let { userList, keyword } = this.state;
    // tim kiem ten
    // use: filter 
    userList = this.state.userList.filter(user => {
      return user.name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search keyword={this.handleSearch} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null
              })
            }}
          >
            Add User
          </button>
        </div>
        <Users listUser={userList} delete={this.handleDelete} getUserEdit={this.handleGetUserEdit} />
        <Modal onSubmit={this.handleOnSubmit} userEdit={this.state.userEdit} />
      </div>
    );
  }
}

export default Home;
