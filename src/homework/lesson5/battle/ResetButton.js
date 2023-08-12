import {Button} from "@mui/material";

const ResetButton = ({resetHandler}) => {
    return <Button variant="text" style={{color: "crimson"}} onClick={resetHandler}>Reset</Button>
}

export default ResetButton;