import {BATTLE} from "../constants";

export const setUserData = (userId: number, name: String, avatar: String) => ({
    type: BATTLE.SET_USER_DATA,
    payload: {id: userId, name: name, avatar: avatar}
})