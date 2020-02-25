import React, { Component } from 'react'

export default class DemoVongLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { maSP: 1, tenSP: 'Iphone11Pro', giaSP: 1000 },
                { maSP: 2, tenSP: 'Samsung Galaxy Note 10 plus', giaSP: 2000 },
                { maSP: 3, tenSP: 'Xperia 10', giaSP: 999 }
            ]
        }
    };
    // Viết phương thức render các sản phẩm thành các tag tr
    renderSanPham = () => {

        // cach 1 dung for de duyet mang contentTable[]
        // let contentTable = [];
        // for (let i = 0; i < this.state.mangSanPham.length; i++) {
        //     const sanPham = this.state.mangSanPham[i];
        //     console.log(sanPham);
        //     contentTable.push(
        //         <tr key={i}>
        //             <td>{sanPham.maSP}</td>
        //             <td>{sanPham.tenSP}</td>
        //             <td>{sanPham.giaSP}</td>
        //         </tr>
        //     );
        // }
        // console.log(contentTable);
        // return contentTable;

        // cách 2 sử dụng map để tạo động các tag jsx từ mảng. Hàm map sẽ trar về 1 mảng kết quả 
        return this.state.mangSanPham.map((sanPham, index) => {
            return (
                <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>{sanPham.giaSP}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="bg-dark p-5 text-center text-white">Demo vòng lặp React</h3>
                <table className="table">
                    <thead>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                    </thead>
                    <tbody>
                        {this.renderSanPham()}
                    </tbody>
                </table>
            </div>
        )
    }
}
