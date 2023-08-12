import {getJson} from "./JsonUtils";

export const handleError = (error, handler) => {
    (error.response.status === 403)
        ? alert("Rate limit exceeded. Please retry in couple of minutes")
        : handler()
}

export const fetchPopularRepos = (language, pageSize, page) => {
    const uri = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>100+language:${language}&sort=stars&order=desc&per_page=${pageSize}&page=${page}`);
    return getJson(uri)
        .catch(error => handleError(error, () => alert(`Error appeared during call to Github search API`)));
}

export const fetchUserInfo = (userName) => {
    console.log('user_info', userName)
    const uri = window.encodeURI(`https://api.github.com/users/${userName}`);
    return getJson(uri)
        .catch(error => handleError(error, () => alert(`No user with name ${userName} found on GitHub`)));
}

export const fetchUserRepos = (userName) => {
    console.log('user_repos', userName)
    const uri = window.encodeURI(`https://api.github.com/users/${userName}/repos`);
    return getJson(uri)
        .catch(error => handleError(error, () => alert(`No user with name ${userName} found on GitHub`)));
}

const getStarsCount = (repos) => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
}

const calculateScore = (userInfo, repos) => {
    return userInfo.followers + getStarsCount(repos);
}

const getUserData = (userName) => {
    return Promise.all([
        fetchUserInfo(userName),
        fetchUserRepos(userName)
    ]).then(([profile, repos]) => {
        return {profile, score: calculateScore(profile, repos)};
    })
}

const sortPlayers = (players) => players.sort((a,b) => b.score - a.score)

export const makeBattle = (players) => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(error => handleError(error, () => console.log("Some error appeared")))
}