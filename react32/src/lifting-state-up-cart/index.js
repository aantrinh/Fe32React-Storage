import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";
import DemoProps from "./demo";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: data,
      detailProduct: data[0],
      mangGioHang: []

    };
  };

  handleDetailProduct = (sanPham) => {
    console.log(sanPham);
    this.setState({
      detailProduct: sanPham
    });
  };

  timVitri = (sanPham) => {
    return this.state.mangGioHang.findIndex(item => item.maSP === sanPham.maSP)
  };

  // tang giam so luong
  handleTangGiamSL = (sanPham, status) => {
    let index = this.timVitri(sanPham);
    let mangGioHang = [...this.state.mangGioHang];

    if (index !== -1 && status) {
      // tang SL
      mangGioHang[index].soLuong += 1;
    } else {
      // giam SL
      if (mangGioHang[index].soLuong > 1) {
        mangGioHang[index].soLuong -= 1;
      }

    }

    this.setState({
      mangGioHang
    })
  };

  handleGioHang = (sanPham) => {
    const objSanPham = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      hinhAnh: sanPham.hinhAnh,
      donGia: sanPham.giaBan,
      soLuong: 1
    };

    let mangGioHang = [...this.state.mangGioHang];
    let index = mangGioHang.findIndex((item) => {
      return item.maSP === objSanPham.maSP;
    });
    // console.log(sanPham);
    // if(//lớn hơn -1 ){
    //   // tìm thấy
    //   //cập nhật lại số lượnglượng
    // }
    if (index !== -1) {
      // cap nhat lai so luong
      mangGioHang[index].soLuong += 1;

    } else {
      //Them SP vao gio hang
       mangGioHang = [...this.state.mangGioHang, objSanPham];
    }

    this.setState({
      mangGioHang
    }, () => {
      console.log(this.state.mangGioHang); //gọi từ đây để không bị console ẩn mất 1 sản phẩm
    });
    // console.log(mangGioHang);
  };
//  xoa san pham
handleDelete = sanPham =>{
  let index = this.timVitri(sanPham);
  let mangGioHang = [...this.state.mangGioHang];

  if(index !== -1){
    mangGioHang.splice(index, 1)
  }
  this.setState({
    mangGioHang
  })
};

// tinh tong sl sp
tinhTongSoLuong = () =>{
  let mangGioHang = [...this.state.mangGioHang];
   return mangGioHang.reduce((tong, sp) =>{
     return (tong += sp.soLuong);

   }, 0 );
}
  render() {
    let { detailProduct } = this.state;

    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tinhTongSoLuong()})
          </button>
        </div>
        <DanhSachSanPham listProduct={this.state.mangSanPham} detailProductParent={this.handleDetailProduct} gioHangParent={this.handleGioHang} />

        <Modal mangGioHang={this.state.mangGioHang} tangGiamSL={this.handleTangGiamSL} delete={this.handleDelete} />

        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
