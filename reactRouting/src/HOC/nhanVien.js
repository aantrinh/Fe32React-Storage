import React, { Component } from 'react'


export default class NhanVien extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label> Ma NV</label>
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
                </div>
                <div className="form-group">
                    <label> Ten NV</label>
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
                </div>
                <div className="form-group">
                    <label> Email</label>
                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
                </div>
            </div>

        )
    }
}
