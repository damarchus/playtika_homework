import {Fragment, useState} from "react";
import {TextField} from "@mui/material";

const LoginSection = ({setEmail, setPassword}) => {
    const pwdShortError = <li key={1}>Password should be 6 symbols or longer</li>
    const pwdLongError = <li key={2}>Password should be 10 symbols or less</li>
    const pwdNumberError = <li key={3}>Password should contain at least 1 digit</li>
    const pwdCapError = <li key={4}>Password should contain at least 1 capital letter</li>

    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const containsUppercase = (str) => /[A-Z]/.test(str);
    const containsDigit = (str) => /[0-9]/i.test(str);

    const[emailError, setEmailError] = useState({isError: false, errorText: <></>});
    const[passwordError, setPasswordError] = useState({isError: false, errorText: <></>});

    const inputEmail = (event) => {
        const email = event.target.value;
        if (!isEmail(email)) {
            setEmailError({isError: true, errorText: <>Is not valid email</>});
            setEmail('')
        } else {
            setEmailError({isError: false, errorText: <></>});
            setEmail(email);
        }
    }

    const inputPassword = (event) => {
        const password: String = event.target.value;
        let errors: Element[] = [];

        if (password.length < 6) {
            errors.push(pwdShortError);
            // errors.push(<br/>)
        }
        if (password.length > 10) {
            errors.push(pwdLongError);
            // errors.push(<br/>)
        }
        if (!containsDigit(password)) {
            errors.push(pwdNumberError);
            // errors.push(<br/>)
        }
        if (!containsUppercase(password)) {
            errors.push(pwdCapError);
            // errors.push(<br/>)
        }

        if (errors.length === 0) {
            setPasswordError({isError: false, errorText: <></>});
            setPassword(password);
        } else {
            // errors.pop();
            setPasswordError({isError: true, errorText: errors});
            setPassword('');
        }
    }

    return(
        <Fragment>
            <TextField sx={{my: 0.5}}
                       error={emailError.isError}
                       helperText={emailError.errorText}
                       type='email'
                       size='small'
                       label='Email'
                       onChange={inputEmail} />
            <TextField sx={{my: 0.5}}
                       error={passwordError.isError}
                       helperText={passwordError.errorText}
                       type='password'
                       size='small'
                       label='Password'
                       onChange={inputPassword} />
        </Fragment>
    )
}

export default LoginSection;