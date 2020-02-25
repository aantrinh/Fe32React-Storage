import React, { Component } from 'react'

export default class BaiTapState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: './img/mercedesred.jpeg'
        }
    }

    changeColor = (color) => {
        let imgSource = '';
        switch (color) {
            case 'red':
                imgSource = './img/mercedesred.jpeg'
                break;
            case 'silver':
                imgSource = './img/mercedessilver.jpeg'
                break;
            case 'black':
                imgSource = './img/mercedesblack.jpeg'
                break;
        }
        // Gọi phương thức setState để truyền imgSource mới từ sự kiện click button => render lại giao diện với source mới
        this.setState({
            img: imgSource
        })
    };


    render() {
        const styleButton = {
            color: '#fff',
            marginRight: '5px'
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h3>Please choose your farvorite about car's color</h3>
                        <img src={this.state.img} width="400" height="200" />
                    </div>
                    <div className="col-md-5">
                        <h3>Change color</h3>
                        <button className="btn btn-danger" style={styleButton} onClick={() => this.changeColor('red')} >Red color</button>
                        <button className="btn btn-secondary" style={styleButton} onClick={() => this.changeColor('silver')} >Silver color</button>
                        <button className="btn btn-dark" style={styleButton} onClick={() => this.changeColor('black')} >Black color</button>
                    </div>
                </div>
            </div>
        )
    }
}
