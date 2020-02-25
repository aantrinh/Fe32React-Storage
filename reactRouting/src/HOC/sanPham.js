import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label> Ma SP</label>
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
                </div>
                <div className="form-group">
                    <label> Ten SP</label>
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
                </div>
            </div>
        )
    }
}
