import RepoCard from "./RepoCard";

const PopularList = ({repos, page}) => {
    return(
        <div className="repoList">
            {repos.map((repo, index) => <RepoCard key={repo.id} repo={repo} rank={(page-1)*20+index+1}/>)}
        </div>
    );
}

export default PopularList;