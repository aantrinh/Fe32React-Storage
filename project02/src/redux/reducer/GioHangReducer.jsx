
// Khởi tạo giá trị ban đầu của store
// GioHang default ban dau 

const stateGioHang = {
    gioHang: []
}
export const GioHangReducer = (state = stateGioHang, action) => {
    // console.log("reducer",action)
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // xu ly logic them gio hang
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP ===
                action.spGioHang.maSP)
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                gioHangCapNhat.push(action.spGioHang)
            }
            state.gioHang = gioHangCapNhat
        }; break;
        // case 'XOA_GIO_HANG':{
        //     let gioHangCapNhat = [...state.gioHang];
        //     // xóa giỏ hàng dựa vào index
        //     gioHangCapNhat.splice(action.index,1)
        //     // gán giỏ hàng mới cho state.gioHang => render lại giao diện
        //     state.gioHang = gioHangCapNhat
        //     return {...state};
        // }
        case 'XOA_GIO_HANG_MSP': {
            let gioHangCapNhat = [...state.gioHang];
            // tim index dua vao maSP
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
            if (index !== -1) {
                // xóa giỏ hàng dựa vào index
                gioHangCapNhat.splice(action.index, 1)
            }
            // gán giỏ hàng mới cho state.gioHang => render lại giao diện
            state.gioHang = gioHangCapNhat
            return { ...state };
        }; break;
        case 'TANG_GIAM_SL': {
            const { tangGiam, index } = action;
            // console.log(action);
            let gioHangCapNhat = [...state.gioHang];
            // let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
            if (tangGiam) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                if (gioHangCapNhat[index].soLuong > 1) {
                    gioHangCapNhat[index].soLuong -= 1;
                }
            }
            state.gioHang = gioHangCapNhat
            return { ...state }

        }; break;
        // case 'TANG_GIAM_SL': {
        //     const {tangGiam} = action;
        //     // console.log(action);
        //     let gioHangCapNhat = [...state.gioHang];
        //     let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
        //     if (tangGiam) {
        //         gioHangCapNhat[index].soLuong += 1;
        //     } else {
        //         if (gioHangCapNhat[index].soLuong > 1) {
        //             gioHangCapNhat[index].soLuong -= 1;
        //         }
        //     }
        //     state.gioHang = gioHangCapNhat
        //     return { ...state }

        // }
        default:{
            return { ...state }
        }; break;
    }
}