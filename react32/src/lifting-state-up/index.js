import React, { Component } from 'react';
import DanhSachSanPham from './danhSachSanPham';

export default class LiftingStateUp extends Component {
    render() {
        return (
            <div>
                <h3 className="title">LiftingStateUp</h3>
                <DanhSachSanPham />
            </div>
        )
    }
}
