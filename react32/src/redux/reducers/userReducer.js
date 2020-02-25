import * as ActionType from "./../constants/ActionType";
// import { connect } from "react-redux";

let initialState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        },
        {
            id: 2,
            name: "Trinh Hoai An",
            username: "anht",
            email: "anht7198@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        }
    ],
    keyword: "",
    userEdit: null
};
const userReducer = (state = initialState, action) => {
    // Nếu như action lấy ds => trả state về component
    // Nếu như action là delete => trả về component
    // Nếu edit action => trả về component

    switch (action.type) {
        // chuc nang xoa
        case ActionType.DELETE:
            console.log(action);
            /**chuc nang xoa
             * 0. tim vi tri
             * 1. 
             */
            let index = state.userList.findIndex(item => item.id === action.user.id);
            if (index !== -1) {
                let userList = [...state.userList];
                userList.splice(index, 1)
                state.userList = userList;
            }
            return { ...state };

        // chuc nang tim kiem
        case ActionType.FILTER:
            console.log(action);
            state.keyword = action.keyword;
            return { ...state };

        // chuc nang cap nhat
        case ActionType.ON_SAVE:
            console.log(action);
            if (action.user.id) {
                // UPDATE USER
                let index = state.userList.findIndex(
                    user => user.id === action.user.id
                );
                if (index !== -1) {
                    let userList = [...state.userList];
                    userList[index] = action.user;
                    state.userList = userList;
                }
            } else {
                // ADD USER
                let user = { ...action.user };
                user.id = Math.random();
                state.userList = [...state.userList, user];
            }

            return { ...state };

        // chuc nang edit
        case ActionType.EDIT_USER:
            console.log(action);
            state.userEdit = action.user;
            return { ...state }
        default:
            return { ...state };
    }
};

export default userReducer;