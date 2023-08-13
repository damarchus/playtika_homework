import {PlayerInput} from "./PlayerInput";
import PlayerInfo from "./PlayerInfo";
import {Button} from "@mui/material";
import {Face, Face6} from "@mui/icons-material";
import ResetButton from "./ResetButton";
import {useSelector} from "react-redux";

const Battle = () => {
    const user1 = useSelector(state => state.battle.user1)
    const user2 = useSelector(state => state.battle.user2)

    return(
        <div className="battle">
            <h1 className="battleHeader">Select your contestants and fight!</h1>
            <div className="battleCardRow">
                {user1.name
                    ? <PlayerInfo name={user1.name} avatar={user1.avatar} >
                        <ResetButton index={1} />
                      </PlayerInfo>
                    : <PlayerInput index={1} />
                }
                {user2.name
                    ? <PlayerInfo name={user2.name} avatar={user2.avatar} >
                        <ResetButton index={2} />
                      </PlayerInfo>
                    : <PlayerInput index={2} />
                }
            </div>
            <Button className="battleButton" variant="contained"
                    disabled={!(user1.name && user2.name)}
                    startIcon={user1.name ? <Face /> : null}
                    endIcon={user2.name ? <Face6 /> : null}
                    href={`battle/result?user1=${user1.name}&user2=${user2.name}`}
            >
                Fight!
            </Button>
        </div>
    );
}

export default Battle;