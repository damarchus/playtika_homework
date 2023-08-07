import {useEffect, useState} from "react";
import {CircularProgress, Pagination} from "@mui/material";
import {fetchPopularRepos} from "../utils/JsonUtils";
import PopularList from "./PopularList";

const PopularContainer = ({language}) => {
    const pageSize = 20;
    // Search response in github is limited to 1000 hits - https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#about-search
    const maxResultSize = 1000;

    const[loading, setLoading] = useState(true);
    const[pageCount, setPageCount] = useState(0);
    const[page, setPage] = useState(1);
    const[repos, setRepos] = useState([]);

    useEffect(() => setPage(1), [language]);

    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(language, pageSize, page)
            .then(response => {
                setPageCount(Math.ceil(Math.min(response.total_count, maxResultSize)/pageSize));
                setRepos(response.items);
            })
            .catch(() => alert("Secondary limit of calls achieved. Please retry in couple of minutes"))
            .finally(() => setLoading(false));
    }, [language, page]);

    const handlePagination = (event, pageNumber) => {
        setPage(pageNumber);
    }

    return(
        <div className="listContainer">
            <div className="loadScreen" style={{visibility: loading ? "visible" : "hidden"}} aria-hidden={!loading} >
                <CircularProgress color="inherit" />
            </div>
            <PopularList repos={repos} page={page} pageSize={pageSize}/>
            <Pagination count={pageCount} page={page} variant="filled" shape="rounded" onChange={handlePagination}/>
        </div>
    );
}

export default PopularContainer;