import React, { Component } from 'react';
import NhanVien from './nhanVien';
import SanPham from './sanPham';
import WithModal from './with-modal';

const FormModal = WithModal(SanPham);

export default class HOC extends Component {
    render() {
        return (
            <div>
              <FormModal />
            </div>
        )
    }
}
