import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Movie extends Component {
    render() {
        let { movie } = this.props
        return (
            <div className="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <img className="img-fluid" src={movie.hinhAnh} />
                        <h4>{movie.tenPhim}</h4>
                    </div>
                    <div class="card-footer">
                        <NavLink className="btn btn-success"
                            to={`/detail-movie/${movie.maPhim}`}>
                            Chi tiết
                         </NavLink>
                    </div>
                </div>

            </div>
        )
    }
}
