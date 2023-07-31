import {Fragment, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
import {validateName, ValidationResult} from "../utils/ValidationUtils";

const RegisterSection = ({setFirstName, setLastName, canRegister}) => {
    const[fnError, setFnError] = useState(new ValidationResult());
    const[lnError, setLnError] = useState(new ValidationResult());

    const ageInput = useRef();

    const inputName = (event, handler, errorHandler) => {
        const name: String = event.target.value;
        const validationResult = validateName(name);

        errorHandler(validationResult);
        handler(validationResult.isError ? '' : name);
    }

    const inputFirstName = (event) => {
        inputName(event, setFirstName, setFnError)
    }

    const inputLastName = (event) => {
        inputName(event, setLastName, setLnError)
    }

    const verifyAgeInput = () => {
        console.log(ageInput.current.value);
        if (ageInput.current.value < 18) {
            alert("You are too young");
        }
    }

    return(
        <Fragment>
            <TextField sx={{my: 0.5}}
                       error={fnError.isError}
                       helperText={fnError.errorDetails}
                       type='text'
                       size='small'
                       label='First Name'
                       onChange={inputFirstName}/>
            <TextField sx={{my: 0.5}}
                       error={lnError.isError}
                       helperText={lnError.errorDetails}
                       type='text'
                       size='small'
                       label='Last Name'
                       onChange={inputLastName} />
            <span>Age: <input type='number' ref={ageInput}/></span>
            <Button variant='text' disabled={!canRegister} onClick={verifyAgeInput}>Register</Button>
        </Fragment>
    )
}

export default RegisterSection;