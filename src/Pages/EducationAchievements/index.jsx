import React,{useEffect} from "react";
import Header from "../../components/Header";
import EducationTitles from "../../containers/Education/EducationTitles";
import {degree} from "../../portfolio";
import DegreeCard from "../../components/Degree/DegreeCard";
import Certifications from "../../containers/Certifications/Certifications";
import Footer from "../../components/Footer";
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga";

export default function EducationAchievements(props){

    const location = useLocation();
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return (
        <div>
            <Header
                theme={props.theme}
                setTheme={props.setTheme}
            />
            <EducationTitles
                theme={props.theme}
            />
            {degree.degrees.map((d)=>
            {
                return(
                    <DegreeCard
                theme={props.theme}
                degree={d}
            />
                )
            })}
            <Certifications
                theme={props.theme}
            />
            <Footer
                theme={props.theme}
            />
        </div>
    )
}