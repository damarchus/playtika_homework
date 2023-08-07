import React from "react";
import {NavLink} from "react-router-dom";
import HomepageCard from "./HomepageCard";
import {Stack} from "@mui/material";

const pages = [
    {id: 0, url: "/lesson5/popular", title: "Popular", description: "List of top-1000 popular GitHub repositories in selected language"},
    {id: 1, url: "/lesson5/battle", title: "Battle", description: "Battle other GitHub repositories for something"},
]

const Lesson5 = () => {
    return(
        <Stack className="navCardContainer" direction="row" spacing={3} justifyContent="center">
            {pages.map(page =>
                <NavLink className="navCard" key={page.id} to={page.url}>
                    <HomepageCard title={page.title} description={page.description}/>
                </NavLink>
            )}
        </Stack>
    );
}

export default Lesson5;