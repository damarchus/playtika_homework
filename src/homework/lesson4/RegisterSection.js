import {Fragment, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";

const RegisterSection = ({setFirstName, setLastName, canRegister}) => {
    const nameShortError = <li key={1}>Name should be 2 symbols or longer</li>
    const nameDigitError = <li key={2}>Name should not contain digits(yes, Elon, it shouldn't)</li>

    const[fnError, setFnError] = useState({isError: false, errorText: <></>});
    const[lnError, setLnError] = useState({isError: false, errorText: <></>});

    const containsDigit = (str) => /[0-9]/i.test(str);

    const ageInput = useRef();

    const inputName = (event, handler, errorHandler) => {
        const name: String = event.target.value;
        let errors: Element[] = [];

        if (name.length < 2) {
            errors.push(nameShortError);
        }
        if (containsDigit(name)) {
            errors.push(nameDigitError);
        }

        if (errors.length === 0) {
            errorHandler({isError: false, errorText: <></>});
            handler(name);
        } else {
            errorHandler({isError: true, errorText: errors});
            handler('');
        }
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
                       helperText={fnError.errorText}
                       type='text'
                       size='small'
                       label='First Name'
                       onChange={inputFirstName}/>
            <TextField sx={{my: 0.5}}
                       error={lnError.isError}
                       helperText={lnError.errorText}
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