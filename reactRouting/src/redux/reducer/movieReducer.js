import * as ActionType from './../constant/constants'

let initialState = {
    listMovie: [],
    movie:{}
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_MOVIE:
            state.listMovie = action.listMove;
            return { ...state };
        case ActionType.GET_DETAIL_MOVIE:
            console.log(action)
            state.movie = action.movie
            return { ...state };


        default:
            return { ...state };
    }
};

export default movieReducer;