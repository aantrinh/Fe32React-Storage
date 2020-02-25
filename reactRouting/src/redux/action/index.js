import * as ActionType from "./../constant/constants";
import Axios from 'axios';
export const actGetListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07"
        }).then(result => {
            // console.log(result.data);
            // console.log(123)
            //    this.props.getListMovie(result.data);
            dispatch({
                type: ActionType.GET_LIST_MOVIE,
                listMove: result.data
            })
        })
            .catch(err => {
                console.log(err);
            });
    };
};

export const actGetListMovie = id => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        }).then(
            result => {
                console.log(result);
                dispatch({
                    type: ActionType.GET_DETAIL_MOVIE,
                    movie: result.data
                })
            })
        .catch(err =>{
            console.log(err);
        });
    };
};

export const actLogin = (user, history) =>{
    return dispatch =>{
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        })
        .then(result =>{
            console.log(result.data);
            if(result.data.maLoaiNguoiDung === "QuanTri"){
                localStorage.setItem("userAdmin", JSON.stringify(result.data));
                alert("Login success");
                history.push("/dashboard"); // buoc chuyen huong qua trang tiep theo
            } else{
                alert("Khong co quyen truy cap");
            }
        })
        .catch(err =>{
            console.log(err);
        });
    };
};