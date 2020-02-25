import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    // tim kiem ten
    // use: filter 
    // userList = this.state.userList.filter(user => {
    //   return user.name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1;
    // });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management Redux</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search
          // keyword={this.handleSearch}
          />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUserRedux"
            onClick={() => {
              // this.setState({
              //   userEdit: null
              // })
              this.props.onEdit();
            }}
          >
            Add User
          </button>
        </div>
        <Users
          // listUser={userList} 
          // delete={this.handleDelete}
          // getUserEdit={this.handleGetUserEdit} 
          />
        <Modal
          // onSubmit={this.handleOnSubmit}
          // userEdit={this.state.userEdit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onEdit: ()=>{
      let action ={
        type: "EDIT_USER",
        user: null
      };
      dispatch(action);
    }
  };
};

export default connect(null, mapDispatchToProps) (Home);
