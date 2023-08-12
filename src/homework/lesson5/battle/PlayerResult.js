import {Fragment} from "react";

const PlayerResult = ({status, score}) => {
    return(
        <Fragment>
            <h3>{status.toUpperCase()}</h3>
            <h5>with score: {score}</h5>
        </Fragment>
    );
}

export default PlayerResult;