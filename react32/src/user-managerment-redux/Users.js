import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class Users extends Component {

  renderHTML = () => {
    let { listUser, keyword } = this.props;
    listUser = listUser.filter(user => {
      return user.name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1;
    });

    return listUser.map((item, index) => {
      return <UserItem
        user={item}
        key={index}
        // delete={this.props.delete} 
        // getUserEdit={this.props.getUserEdit}
         />;
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody> {this.renderHTML()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listUser: state.userReducer.userList,
    keyword: state.userReducer.keyword
  };
};
export default connect(mapStateToProps, null)(Users);
