import React, { Component } from 'react';
import ProductList from './ProductList';
import Header from './Header.jsx';
import Slider from './Slider.jsx';
import Footer from './Footer.jsx';
import LaptopProductList from './laptopProductList';
import Modal from './Modal';

export default class BaiTapComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            sanPhamModal: { maSP: 1, tenSP: 'Iphone11Pro', hinhAnh: './img/promax.jpg', giaSP: 1000 } //tạo nguồn dữ liệu thay đổi
        }
    }

    mangSanPham = [
        { maSP: 1, tenSP: 'Iphone11Pro', hinhAnh: './img/promax.jpg', giaSP: 1000 },
        { maSP: 2, tenSP: 'Galaxy Note 7', hinhAnh: './img/sp_note7.png', giaSP: 2000 },
        { maSP: 3, tenSP: 'Xperia 10', hinhAnh: './img/xperia10.png', giaSP: 999 },
        { maSP: 4, tenSP: 'Google Pixel 4', hinhAnh: './img/pixel4.jpg', giaSP: 999 }
    ]

    mangLapTop = [
        { maSP: 1, tenSP: 'MACBOOK', hinhAnh: './img/lt_macbook.png', moTa: 'The MacBook is a brand of notebook computers manufactured by Apple Inc' },
        { maSP: 2, tenSP: 'ASUS ROG', hinhAnh: './img/lt_rog.png', moTa: 'the Asus ROG Strix Flare is the latest addition to Asus' },
        { maSP: 1, tenSP: 'HP OMEN', hinhAnh: './img/lt_hp.png', moTa: 'A young global smartphone brand focusing on introducing perfect sound quality' },
        { maSP: 1, tenSP: 'LENOVO THINKPAD', hinhAnh: './img/lt_lenovo.png', moTa: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012' }
    ]
    // dữ liệu cần nhận ở đâu thì mình tạo callback function tại component đó
    xemChiTiet = (sanPhamChiTiet) => {
        this.setState({
            sanPhamModal: sanPhamChiTiet
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Slider />
                <ProductList mangSanPham={this.mangSanPham} xemChiTiet={this.xemChiTiet}/>
                <LaptopProductList mangLapTop={this.mangLapTop} />
                <Footer />
                <Modal sanPhamModal={this.state.sanPhamModal} />
            </div>
        )
    }
}
