import React,{useEffect} from "react";
import Header from "../../components/Header";
import JobHistory from "../../containers/Experience/JobHistory";
import Footer from "../../components/Footer";
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

export default function Experience(props){
    
    const location = useLocation();
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return (
        <>
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <link rel="canonical" href="https://www.patrickslaine.co.uk/experience" />
                    <meta name="description" property="og:description" content="Patrick has gained experience across a variety of sectors. Using a wide range of technology stacks such a React, .NET & Java. Find out more about my experience and how I can add value."/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="title" property="og:title" content="Patrick Slaine | Software Engineer | Experience"/>
                    <meta name="type" property="og:type" content="website"/>
                    <meta name="image" property="og:image" content="https:/www.patrickslaine.co.uk/images/Patrick Slaine Headshot.jpg"/>
                    <meta name="url" property="og:url" content="https://www.patrickslaine.co.uk"/>
                    <meta name="keywords" content="Patrick Slaine, Software Engineer, Software Developer, React Developer, .NET Developer, Powerlifter"/>
                </Helmet>
                <Header
                    theme={props.theme}
                    setTheme={props.setTheme}
                />
                <JobHistory
                    theme={props.theme}
                    setTheme={props.setTheme}
                />
                <Footer
                    theme={props.theme}
                />
            </div>
        </>
    )
}