import {useState} from "react";

const Lesson2 = () => {
    const [user, setUser] = useState(
        {name: 'Stepan', age: 25}
    )
    const [isHidden, changeHiddenState] = useState(true)

    const changeUser = () => {
        setUser({name: 'Mykola', age: 30})
    }

    return(
        <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{visibility: isHidden ? 'hidden' : 'visible', padding: 10}}>
                <p>Name: {user.name}, age: {user.age}</p>
                <button onClick={() => changeUser()}>Change user</button>
            </div>
            <button onClick={() => changeHiddenState(!isHidden)}>{isHidden ? 'Show' : 'Hide'}</button>
        </div>
    );
}

export default Lesson2