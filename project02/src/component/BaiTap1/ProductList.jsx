import React, { Component } from 'react';
import Product from './Product.jsx';

export default class ProductList extends Component {
    renderSanPham = () => {
        // lấy giá trị mảng sản phẩm từ component cha truyền vào thông qua thuộc tính this.props
        let { mangSanPham, xemChiTiet } = this.props;

        return mangSanPham.map((sp, index) => {
            return (
                <Product sanPham={sp} key={index} xemChiTiet={xemChiTiet} />
            )
        })
    }

    render() {
        return (
            <div className="bg-dark pt-5 pb-5">
                <div className="container">
                    <h3 className="text-center text-light">BEST SMARTPHONE</h3>
                    <div className="row">
                        {this.renderSanPham()}
                    </div>
                </div>
            </div>
        )
    }
}
