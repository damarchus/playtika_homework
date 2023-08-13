import {BATTLE} from "../constants";

const initialState = {
    user1: {
        name: '',
        avatar: '',
    },
    user2: {
        name: '',
        avatar: '',
    }
}

const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BATTLE.SET_USER_DATA:
            return {...state, [`user${action.payload.id}`]: {name: action.payload.name, avatar: action.payload.avatar}};
        default: {
            return state;
        }
    }
}

export default battleReducer;