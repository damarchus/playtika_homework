import {useDispatch, useSelector} from "react-redux";
import {setActiveLanguage} from "../../redux/popular/actions";
import {memo} from "react";

const languages = ['All', 'Java', 'Javascript', 'Ruby', 'Python', 'CSS'];

const PopularTabs = memo(() => {
    const dispatch = useDispatch();

    const activeLanguage = useSelector(state => state.popular.activeLanguage)
    const isLoading = useSelector(state => state.popular.isLoading)

    return(
        <ul className='languages nonDecorated'>
            {languages.map((language, index) =>
                <li
                    key={index}
                    className={activeLanguage === language ? 'language selected' : 'language'}
                    onClick={() => {
                        if(!isLoading) {
                            dispatch(setActiveLanguage(language))
                        }
                    }}
                >{language}</li>
            )}
        </ul>
    );
})

export default PopularTabs;