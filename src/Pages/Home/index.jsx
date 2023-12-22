import React,{useEffect} from "react";
import Header from "../../components/Header";
import Introduction from "../../containers/Introduction/Introduction";
import SkillsList from "../../components/SkillsList";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import {Helmet} from "react-helmet";

export default function Layout(props){

    const location = useLocation();
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return(
    <>
        <div>
        <div className="router-view-body" id="main">
            <Helmet>
                <meta charSet="utf-8"/>
                <link rel="canonical" href="https://www.patrickslaine.co.uk/" />
                <meta name="description" property="og:description" content="Patrick Slaine is a Software Engineer with experience working in the Consulting & Banking sectors. Technologies - Java - .NET - Javascript"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Patrick Slaine | Software Engineer | Northern Ireland</title>
                <meta name="title" property="og:title" content="Patrick Slaine | Software Engineer | Northern Ireland"/>
                <meta name="type" property="og:type" content="website"/>
                <meta name="image" property="og:image" content="https:/www.patrickslaine.co.uk/images/Patrick Slaine Headshot.jpg"/>
                <meta name="url" property="og:url" content="https://www.patrickslaine.co.uk"/>
                <meta name="keywords" content="Patrick Slaine, Software Engineer, Software Developer, React Developer, .NET Developer, Powerlifter"/>
            </Helmet>
            <Header
                theme={props.theme}
                setTheme={props.setTheme}
                />
            <Introduction
                theme={props.theme}
                setTheme={props.setTheme}
                />
            <SkillsList
                theme={props.theme}
                />
            <Footer
                theme={props.theme}
            />
            
            </div>
        </div>
    </>
    )
}