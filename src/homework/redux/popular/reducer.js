import {POPULAR} from "../constants";

const initialState = {
    activeLanguage: 'All',
    isLoading: true,
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR.SET_ACTIVE_LANGUAGE:
            return {...state, activeLanguage: action.payload};
        case POPULAR.SET_LOADING:
            return {...state, isLoading: action.payload};
        default: {
            return state;
        }
    }
}

export default popularReducer;