import React from "react";

const RepoCard = ({repo, rank}) => {
    return(
        <div className="repoCard">
            <div className="repoCardHeader">
                <div className="cardAvatar small">
                    <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
                </div>
                <div className="repoCardHeaderText">
                    <span>#{rank}</span>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                </div>
            </div>
            <div className="repoCardBody">
                <ul className="repoCardText nonDecorated">
                    <li>Author: <a href={repo.owner.html_url} target="_blank" rel="noreferrer">@{repo.owner.login}</a></li>
                    <li>Rating: {repo.stargazers_count} stars</li>
                </ul>
            </div>
        </div>
    )
}

export default RepoCard;