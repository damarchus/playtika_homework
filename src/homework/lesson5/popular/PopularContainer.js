import {memo, useEffect, useState} from "react";
import {CircularProgress, Pagination} from "@mui/material";
import PopularList from "./PopularList";
import {fetchPopularRepos} from "../../utils/GithubApi";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "../../redux/popular/actions";

const PopularContainer = memo(() => {
    const pageSize = 20;
    // Search response in github is limited to 1000 hits - https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#about-search
    const maxResultSize = 1000;

    const dispatch = useDispatch();

    const activeLanguage = useSelector(state => state.popular.activeLanguage)
    const isLoading = useSelector(state => state.popular.isLoading)

    const[pageCount, setPageCount] = useState(0);
    const[page, setPage] = useState(1);
    const[repos, setRepos] = useState([]);

    useEffect(() => {
        setPage(1)
    }, [activeLanguage]);

    useEffect(() => {
        dispatch(setLoading(true));
        fetchPopularRepos(activeLanguage, pageSize, page)
            .then(response => {
                if(response){
                    setPageCount(Math.ceil(Math.min(response.total_count, maxResultSize)/pageSize));
                    setRepos(response.items);
                }
            })
            .finally(() => dispatch(setLoading(false)));
    }, [activeLanguage, page, dispatch]);

    const handlePagination = (event, pageNumber) => {
        setPage(pageNumber);
    }

    return(
        <div className="listContainer">
            <div className="loadScreen" style={{visibility: isLoading ? "visible" : "hidden"}} aria-hidden={!isLoading} >
                <CircularProgress color="inherit" />
            </div>
            <PopularList repos={repos} page={page} pageSize={pageSize}/>
            <Pagination count={pageCount} page={page} variant="filled" shape="rounded" onChange={handlePagination}/>
        </div>
    );
})

export default PopularContainer;