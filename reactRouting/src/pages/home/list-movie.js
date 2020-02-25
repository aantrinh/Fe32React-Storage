import React, { Component } from 'react';
import Axios from 'axios';
import Movie from './../../component/movie';
import { connect } from 'react-redux';
import * as action from './../../redux/action/index';
import movieReducer from '../../redux/reducer/movieReducer';

 class Listmovie extends Component {
    componentDidMount() {
        this.props.getListMovie();
        // Axios({
        //     method: "GET",
        //     url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07"
        // }).then(result => {
        //     console.log(result.data);
        //     console.log(123)
        // //    this.props.getListMovie(result.data);
        // })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }

    renderHTML = () => {
        let {listMovie} = this.props;
        return listMovie.map((item, index) =>{
            return <Movie key={index} movie={item}/>
        })
    }

    render() {
        return (
            <div className="row"> {this.renderHTML()} </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        listMovie: state.movieReducer.listMovie
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getListMovie: () =>{
            dispatch(action.actGetListMovieAPI());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Listmovie);