import {Fragment, useState} from "react";
import {TextField} from "@mui/material";
import {validateEmail, validatePassword, ValidationResult} from "../utils/ValidationUtils";

const LoginSection = ({setEmail, setPassword}) => {
    const[emailError, setEmailError] = useState(new ValidationResult());
    const[passwordError, setPasswordError] = useState(new ValidationResult());

    const inputEmail = (event) => {
        const email = event.target.value;
        const validationResult = validateEmail(email);

        setEmailError(validationResult);
        setEmail(validationResult.isError ? '' : email);
    }

    const inputPassword = (event) => {
        const password = event.target.value;
        const validationResult = validatePassword(password);

        setPasswordError(validationResult);
        setPassword(validationResult.isError ? '' : password);
    }

    return(
        <Fragment>
            <TextField sx={{my: 0.5}}
                       error={emailError.isError}
                       helperText={emailError.errorDetails}
                       type='email'
                       size='small'
                       label='Email'
                       onChange={inputEmail} />
            <TextField sx={{my: 0.5}}
                       error={passwordError.isError}
                       helperText={passwordError.errorDetails}
                       type='password'
                       size='small'
                       label='Password'
                       onChange={inputPassword} />
        </Fragment>
    )
}

export default LoginSection;