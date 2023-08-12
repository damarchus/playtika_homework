import {PlayerInput} from "./PlayerInput";
import {useState} from "react";
import PlayerInfo from "./PlayerInfo";
import {Button} from "@mui/material";
import {Face, Face6} from "@mui/icons-material";
import ResetButton from "./ResetButton";

const Battle = () => {
    const[usersData, setUsersData] = useState({
        player1Name: '',
        player1Avatar: '',
        player2Name: '',
        player2Avatar: '',
    });

    const setPlayerData = (index, name, avatar_url) => {
        setUsersData((prevState) => ({
            ...prevState,
            [`player${index}Name`]: name,
            [`player${index}Avatar`]: avatar_url,
        }));
    }

    const resetPlayerData = (index) => {
        setUsersData((prevState) => ({
            ...prevState,
            [`player${index}Name`]: '',
            [`player${index}Avatar`]: '',
        }));
    }

    return(
        <div className="battle">
            <h1 className="battleHeader">Select your contestants and fight!</h1>
            <div className="battleCardRow">
                {usersData.player1Name
                    ? <PlayerInfo name={usersData.player1Name} avatar={usersData.player1Avatar} >
                        <ResetButton resetHandler={() => resetPlayerData(1)}/>
                      </PlayerInfo>
                    : <PlayerInput index={1} playerHandler={setPlayerData}/>
                }
                {usersData.player2Name
                    ? <PlayerInfo name={usersData.player2Name} avatar={usersData.player2Avatar} >
                        <ResetButton resetHandler={() => resetPlayerData(2)}/>
                      </PlayerInfo>
                    : <PlayerInput index={2} playerHandler={setPlayerData}/>
                }
            </div>
            <Button className="battleButton" variant="contained"
                    disabled={!(usersData.player1Name && usersData.player2Name)}
                    startIcon={usersData.player1Name ? <Face /> : null}
                    endIcon={usersData.player2Name ? <Face6 /> : null}
                    href={`battle/result?user1=${usersData.player1Name}&user2=${usersData.player2Name}`}
            >
                Fight!
            </Button>
        </div>
    );
}

export default Battle;