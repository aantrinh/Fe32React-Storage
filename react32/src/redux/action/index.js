import * as ActionType from "./../constants/ActionType";
// *: biểu hiện cho import tất cả các const bên actiontypeactiontype

export const onSave = user =>{
    return{
        type: ActionType.ON_SAVE,
        user
    };
};

export const deleteUser = user =>{
    return{
        type: ActionType.DELETE,
        user
    };
};

export const editUser = user =>{
    return{
        type: ActionType.EDIT_USER,
        user
    };
};

export const onFilter = keyword =>{
    return{
        type: ActionType.FILTER,
        keyword
    };
};