import PopularTabs from "./PopularTabs";
import PopularContainer from "./PopularContainer";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

const languages = ['All', 'Java', 'Javascript', 'Ruby', 'Python', 'CSS'];

const Popular = () => {
    const[searchParams, setSearchParams] = useSearchParams();
    const[activeLanguage, setActiveLanguage] = useState(searchParams.lang || languages[0]);
    const[loading, setLoading] = useState(true);

    const setLanguage = (language) => {
        setActiveLanguage(language);
        setSearchParams({lang: language});
    }

    return(
        <div className="popular">
            <PopularTabs languages={languages} activeLanguage={activeLanguage} setLanguage={setLanguage} loading={loading}/>
            <PopularContainer language={activeLanguage} loading={loading} setLoading={setLoading} />
        </div>
    );
}

export default Popular;