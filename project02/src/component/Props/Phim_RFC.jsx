import React from 'react'

export default function SanPham_RFC(props) {
    let phim = props.phim_input;
    return (
        <div className="card">
            <img className="card-img-top" src={phim.hinhAnh} alt={phim.BiDanh} />
            <div className="card-body">
                <h4 className="card-title">{phim.tenPhim}</h4>
                <p className="card-text">{phim.moTa}</p>
            </div>
        </div>

    )
}