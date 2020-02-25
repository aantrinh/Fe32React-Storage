import React, { Component } from "react";
import SanPham from './san-pham';

export default class DanhSachSanPham extends Component {
  renderHTML = () => {
    return this.props.listProduct.map((item, index) => {
      return < SanPham key={index} sanPham={item} detailProductChild={this.props.detailProductParent} gioHangChild={this.props.gioHangParent} />;
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
         {this.renderHTML()}
        </div>
      </div>
    );
  }
}
