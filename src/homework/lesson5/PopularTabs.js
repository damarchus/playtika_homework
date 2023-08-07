const PopularTabs = ({languages, activeLanguage, setLanguage, loading}) => {

    return(
        <ul className='languages'>
            {languages.map((language, index) =>
                <li
                    key={index}
                    className={activeLanguage === language ? 'language selected' : 'language'}
                    onClick={() => {
                        if(!loading) {
                            setLanguage(language)
                        }
                    }}
                >{language}</li>
            )}
        </ul>
    );
}

export default PopularTabs;