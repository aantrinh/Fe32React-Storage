import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Burger.css'

class BaiTapBurger extends Component {


    renderBreadMid = () => {
        let { burger } = this.props;
        // cách 1 duyệt bằng forIn()
        let content = []
        // use hàm for in để lấy các phần tử
        for (let propsBurger in burger) {
            let breadMid = [];
            for (let i = 0; i < burger[propsBurger]; i++) {
                breadMid.push(<div key={i} className={propsBurger}></div>)
            }
            content.push(breadMid)
        }
        return content;
        // cách khác
        //    return Object.entries(burger).map(([propsburger,value],index) =>{
        //             let breadMid =[];
        //             for (let i =0; i<value; i++){
        //                 breadMid.push(<div key={i} className={propsburger}></div>)
        //             }
        //             return breadMid;
        //     })
    }

    renderMenu = () => {
        let { menu, burger } = this.props;
        console.log(menu);
        return Object.entries(menu).map(([propsMenu, price], index) => {
            return (
                <tr key={index} className="text-center">
                    <td>{propsMenu}</td>
                    <td>
                        <button onClick={() => { this.props.addBreadMid(propsMenu, -1) }} className="btn-danger">-</button>
                        {burger[propsMenu]}
                        <button onClick={() => { this.props.addBreadMid(propsMenu, 1) }} className="btn-success">+</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propsMenu] * price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-success text-center">Bài Tập Burger</h3>
                <div className="row">
                    <div className="col-7">
                        <h3 className="text-center text-warning">ANdy's BreadStore</h3>
                        <div className="breadTop"></div>
                        {this.renderBreadMid()}
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-5">
                        <h5 className="text-center text-warning">Your Options</h5>
                        <table className="table">
                            <thead>
                                <tr className="text-center">
                                    <th>Thuc an</th>
                                    <th></th>
                                    <th>Don gia</th>
                                    <th>Thanh Tien</th>
                                </tr>
                                {this.renderMenu()}
                            </thead>
                            <tfoot className="text-center">
                                <td colSpan="2"></td>
                                <td className="bg-info text-light">Tong Cong</td>
                                <td>{this.props.total}</td>
                            </tfoot>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addBreadMid: (propsBurger, amount) => {
            // tạo ra action để truyền lên state
            const action = {
                type: 'ADD_BREADMID',
                propsBurger,
                amount
            }
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger)