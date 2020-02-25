

const StateDefault = {
    mangSinhVien: [{
        maSV: 1,
        hoTen: 'Nguyen Van A',
        soDienThoai: '03030303',
        email: 'abc@gmail.com'
    },
    {
        maSV: 2,
        hoTen: 'Pham Thi L',
        soDienThoai: '06060606',
        email: 'xyz@gmail.com'
    }
]
}
export const QuanLySinhVienReducer = (state = StateDefault, action) =>{
    switch(action.type){
        case 'THEM_SINH_VIEN':{
            // Them du lieu sinh vien vao mangSinhVien
            const mangSvUpdate = [...state.mangSinhVien, action.sinhVien]
            state.mangSinhVien = mangSvUpdate;
            return {...state}
        }; break;
            default:
                return {...state}
    }
   
}
