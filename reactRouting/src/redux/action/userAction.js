import axios from 'axios'


export const layDanhSachNguoiDungAction = () => {
    return dispatch => {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
            method: 'GET'
        }).then(result => {
            
            console.log(result);
            // sau khi lay du lieu tu api => gan vao dsNguoiDung thong qua setDsNguoiDung
            // (tuong tu setState trong react Class Component)
            // dispatch du lieu le reducer
            // cach 1:
            dispatch(danhSachNguoiDungAction(result.data));
            // cach 2:
            // dispatch({
            //     type: 'LAY_DANH_SACH_NGUOI_DUNG',
            //     danhSachNguoiDung:result.data
            // })
            // setDsNguoiDung(result.data)
        }).catch(error => {
            console.log(error)
        })
    }
}
   

const danhSachNguoiDungAction = (danhSachNguoiDung) => {
    return {
        type: 'LAY_DANH_SACH_NGUOI_DUNG',
        danhSachNguoiDung
    }
}

export const themNguoiDungAction = (nguoiDung) =>{
    // lay token tu localStorage
    let userLogin = JSON.parse(localStorage.getItem('userAdmin'));

    return dispatch =>{
        axios({
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            method: 'POST',
            data: nguoiDung,
            headers:{'Authorization': 'Bearer '+ userLogin.accessToken}
        }).then( result =>{
            console.log(result.data)
            // reload goi lai api layDanhSachNguoiDung
            // location.reload();
            // dua du lieu them thanh cong len reducer
            dispatch({type:'THEM_NGUOI_DUNG', nguoiDung:result.data})
        }).catch(error =>{
            console.log(error.response.data)
        })
    }
}