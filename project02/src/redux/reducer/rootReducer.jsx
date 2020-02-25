import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer.jsx';
import {BurgerReducer} from './BurgerReducer.jsx';
import {QuanLySinhVienReducer} from './QuanLySinhVienReducer.jsx'

// store tổng ứng dụng
export const rootReducer = combineReducers({
    // Nơi sẽ chứa các reducer cho nghiệp vụ (store con) // store là nơi lưu và lấy dữ liệu 
    GioHangReducer,
    BurgerReducer,
    QuanLySinhVienReducer
})