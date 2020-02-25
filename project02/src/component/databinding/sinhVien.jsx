import React, { Component } from 'react'

export default class SinhVien extends Component {
    //thuoc tinh
    name = "Trinh Hoai An";
    class = "frontEnd32";
    // ClubName = "CYBERSOFT";

    renderThongTinSinhVien = (tenTrungTam) =>{
        return(
            <ul>
                <li>Họ tên:{this.name} </li>
                <li>Lớp:{this.class} </li>
                <li>Trung Tâm:{tenTrungTam} </li>
            </ul>
        )
    };

    render() {
        const tenTrungTam = 'CYBERSOFT';
        return (
            <div className="container">
                {this.renderThongTinSinhVien(tenTrungTam)}
            </div>
        )
    }
}
