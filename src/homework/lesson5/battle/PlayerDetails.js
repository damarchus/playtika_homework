const PlayerDetails = ({profile}) => {
    return(
        <ul className="nonDecorated">
            {profile.name ? <li>Name: {profile.name}</li> : null}
            {profile.location ? <li>From: {profile.location}</li> : null}
            {profile.company ? <li>Company: {profile.name}</li> : null}
            <li>Followers: {profile.followers}</li>
            <li>Following: {profile.following}</li>
            <li>Public repos: <a href={`${profile.html_url}?tab=repositories`} target="_blank" rel="noreferrer">{profile.public_repos}</a></li>
            {profile.blog ? <li>Blog: <a href={`${profile.html_url}?tab=repositories`} target="_blank" rel="noreferrer">{profile.blog}</a></li> : null}
        </ul>
    );
}

export default PlayerDetails