const stateDefault = {
    danhSachNguoiDung: []
}

export default (state = stateDefault , action) => {
    switch (action.type) {

        case 'THEM_NGUOI_DUNG':
            return { ...state }
        case 'LAY_DANH_SACH_NGUOI_DUNG': {
            // nhận được data từ action sau khi lấy ajax gán lại giá trị mới cho state.danhSachNguoiDungdanhSachNguoiDung
            state.danhSachNguoiDung = action.danhSachNguoiDung;
            return { ...state };
        }

        default:
            return state
    }
}
