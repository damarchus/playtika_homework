import {memo, useState} from "react";
import {Button, Input, InputLabel} from "@mui/material";
import {Form} from "react-router-dom";
import {fetchUserInfo} from "../../utils/GithubApi";
import {useDispatch} from "react-redux";
import {setUserData} from "../../redux/battle/actions";

export const PlayerInput = memo(({index}) => {
    const dispatch = useDispatch();

    const[playerName, setPlayerName] = useState('');

    const submitName = (event) => {
        event.preventDefault();
        fetchUserInfo(playerName)
            .then(data => {
                if(data) {
                    dispatch(setUserData(index, data.login, data.avatar_url));
                }
            })
    }

    return(
        <Form className="battleCard" onSubmit={submitName}>
            <InputLabel htmlFor={`player${index}_name_input`}>Player {index} name</InputLabel>
            <Input type="text" id={`player${index}_name_input`} placeholder="GitHub username" value={playerName}
                   autoComplete="false" onChange={(event) => setPlayerName(event.target.value)} />

            <Button type="submit">Set Player {index}</Button>
        </Form>
    );
})