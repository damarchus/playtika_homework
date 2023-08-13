import {Button} from "@mui/material";
import {setUserData} from "../../redux/battle/actions";
import {useDispatch} from "react-redux";

const ResetButton = ({index}) => {
    const dispatch = useDispatch();

    const resetUser = () => {
        dispatch(setUserData(index, '', ''));
    }

    return <Button variant="text" style={{color: "crimson"}} onClick={resetUser}>Reset</Button>
}

export default ResetButton;