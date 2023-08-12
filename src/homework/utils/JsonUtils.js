import axios from "axios";

export const getJson = (url: String) => {
    return axios.get(url)
        .then(response => { return response.data })
}

export const postJson = (url: String, body: String) => {
    return axios.post(url, body)
        .then(response => { return response.status === 200 })
        .catch(() => {return false})
}

export const putJson = (url: String, body: String) => {
    return axios.put(url, body)
        .then(response => { return response.status === 200 })
        .catch(() => {return false})
}