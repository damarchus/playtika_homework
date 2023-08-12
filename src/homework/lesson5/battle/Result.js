import {useLocation} from "react-router-dom";
import {Fragment, memo, useEffect, useState} from "react";
import {makeBattle} from "../../utils/GithubApi";
import PlayerInfo from "./PlayerInfo";
import PlayerResult from "./PlayerResult";
import PlayerDetails from "./PlayerDetails";
import {Skeleton} from "@mui/material";

const Result = memo(() => {
    const location = useLocation();

    const[loading, setLoading] = useState(true);
    const[winner, setWinner] = useState(null);
    const[loser, setLoser] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        makeBattle([searchParams.get("user1"), searchParams.get("user2")])
            .then(([winner, loser]) => {
                setWinner(winner);
                setLoser(loser);
                setLoading(false);
            })
    }, [])


    return(
        <div className="battle">
            <h1 className="battleHeader">Battle results:</h1>
            <div className="battleCardRow">
                {loading
                    ? <Fragment>
                        <Skeleton className="battleCard" variant="rounded" style={{height: 400}}/>
                        <Skeleton className="battleCard" variant="rounded" style={{height: 400}}/>
                      </Fragment>
                    : <Fragment>
                        <PlayerInfo
                            name={winner.profile.login}
                            avatar={winner.profile.avatar_url}
                            header={<PlayerResult status="winner" score={winner.score}/> }
                        >
                            <PlayerDetails profile={winner.profile}/>
                        </PlayerInfo>
                        <PlayerInfo
                            name={loser.profile.login}
                            avatar={loser.profile.avatar_url}
                            header={<PlayerResult status="loser" score={loser.score}/> }
                        >
                            <PlayerDetails profile={loser.profile}/>
                        </PlayerInfo>
                      </Fragment>
                }
            </div>
        </div>
    )
})

export default Result;