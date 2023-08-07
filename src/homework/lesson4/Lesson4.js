import {useEffect, useState} from "react";
import {Button, ButtonGroup, Card, FormControl} from "@mui/material";
import LoginSection from "./LoginSection";
import RegisterSection from "./RegisterSection";

const Lesson4 = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const[canLogin, setCanLogin] = useState(false);
    const[canRegister, setCanRegister] = useState(false);

    const[newUser, setNewUser] = useState(false);

    useEffect(() => {
        setCanLogin(email !== '' && password !== '')
    }, [email, password])
    useEffect(() => {
        setCanRegister(email !== '' && password !== '' && firstName !== '' && lastName !== '')
    }, [email, password, firstName, lastName])

    return(
        <Card className="outlet" elevation={6} sx={{width: 400, p: 2, m: 2}}>
            <FormControl fullWidth>
                <LoginSection setEmail={setEmail} setPassword={setPassword}/>
                <ButtonGroup sx={{mx: 'auto', my: 1}}>
                    <Button variant='contained' disabled={!canLogin}>Login</Button>
                    <Button variant='outlined' onClick={() => setNewUser(!newUser)}>
                        {newUser ? 'Cancel registration' : 'Register new user'}
                    </Button>
                </ButtonGroup>
                {newUser
                    ? <RegisterSection setFirstName={setFirstName} setLastName={setLastName} canRegister={canRegister}/>
                    : null}
            </FormControl>
        </Card>
    )
}

export default Lesson4;