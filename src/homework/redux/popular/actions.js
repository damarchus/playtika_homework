import {POPULAR} from "../constants";

export const setActiveLanguage = (language: String) => ({
    type: POPULAR.SET_ACTIVE_LANGUAGE,
    payload: language
})

export const setLoading = (isLoading: boolean) => ({
    type: POPULAR.SET_LOADING,
    payload: isLoading
})