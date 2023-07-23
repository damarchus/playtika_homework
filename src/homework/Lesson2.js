import {Fragment, useState} from "react";

const Lesson2 = () => {
    const [user, setUser] = useState(
        {name: 'Stepan', age: 25}
    )
    const [isHidden, changeHiddenState] = useState(true)

    const changeUser = () => {
        setUser({name: 'Mykola', age: 30})
    }

    return(
        <div className='lesson'>
            {isHidden
                ? null
                : <Fragment>
                    <p>Name: {user.name}, age: {user.age}</p>
                    <button onClick={() => changeUser()}>Change user</button>
                  </Fragment>
            }
            <button onClick={() => changeHiddenState(!isHidden)}>{isHidden ? 'Show' : 'Hide'}</button>
        </div>
    );
}

export default Lesson2