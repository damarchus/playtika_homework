import axios from "axios";

export const fetchPopularRepos = (language, pageSize, page) => {
    const uri = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>100+language:${language}&sort=stars&order=desc&per_page=${pageSize}&page=${page}`);
    return getJson(uri);
}

export const getJson = (url: String) => {
    return axios.get(url)
        .then(response => { return response.data })
        .catch(error => {console.log("Error appeared during call to "+ url + ". Message: " + error)})
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