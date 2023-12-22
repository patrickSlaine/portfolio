import React,{useEffect} from "react";
import Header from "../../components/Header";
import EducationTitles from "../../containers/Education/EducationTitles";
import {degree} from "../../assets/portfolio";
import DegreeCard from "../../components/Degree/DegreeCard";
import Certifications from "../../containers/Certifications/Certifications";
import Footer from "../../components/Footer";
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

export default function EducationAchievements(props){

    const location = useLocation();
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <link rel="canonical" href="https://www.patrickslaine.co.uk/education" />
                <meta name="description" property="og:description" content="Patrick attended Queen's University Belfast to study Software Engineer, he achieved a First Class Honours. Throughout my years in the industry, I have also achieved a number of PRofessional Qualifications such as Microsoft Azure Certifications."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Patrick Slaine | Software Engineer | Education</title>
                <meta name="title" property="og:title" content="Patrick Slaine | Software Engineer | Education"/>
                <meta name="type" property="og:type" content="website"/>
                <meta name="image" property="og:image" content="https:/www.patrickslaine.co.uk/images/Patrick Slaine Headshot.jpg"/>
                <meta name="url" property="og:url" content="https://www.patrickslaine.co.uk"/>
                <meta name="keywords" content="Patrick Slaine, Software Engineer, Software Developer, React Developer, .NET Developer, Powerlifter"/>
            </Helmet>
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