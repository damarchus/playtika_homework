const PopularTabs = ({languages, activeLanguage, setLanguage}) => {

    return(
        <ul className='languages'>
            {languages.map((language, index) =>
                <li
                    key={index}
                    className={activeLanguage === language ? 'language selected' : 'language'}
                    onClick={() => setLanguage(language)}
                >{language}</li>
            )}
        </ul>
    );
}

export default PopularTabs;