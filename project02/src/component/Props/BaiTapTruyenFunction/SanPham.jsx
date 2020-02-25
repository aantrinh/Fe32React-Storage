import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {dt}= this.props;

        return (
            <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src={dt.hinhAnh} width={250} height={300} />
                        <div className="card-body">
                            <h4 className="card-title">{dt.tenSP}</h4>
                            <button className="btn btn-primary" onClick={() => { this.props.xemChiTiet(dt) }}>Chi tiết</button>
                        </div>
                    </div>

                </div>
        )
    }
}
