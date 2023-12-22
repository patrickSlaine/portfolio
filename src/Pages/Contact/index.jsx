import React, {useEffect} from "react";
import Header from "../../components/Header";
import ContactMe from "../../containers/Contact/ContactMe";
import Email from "../../components/Email";
import Footer from "../../components/Footer";
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

export default function Contact(props){

    const location = useLocation();
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <link rel="canonical" href="https://www.patrickslaine.co.uk/contact" />
                <meta name="description" property="og:description" content="Check out my CV and get in touch with me by sending me and email."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="title" property="og:title" content="Patrick Slaine | Software Engineer | Contact Me"/>
                <meta name="type" property="og:type" content="website"/>
                <meta name="image" property="og:image" content="https:/www.patrickslaine.co.uk/images/Patrick Slaine Headshot.jpg"/>
                <meta name="url" property="og:url" content="https://www.patrickslaine.co.uk"/>
                <meta name="keywords" content="Patrick Slaine, Software Engineer, Software Developer, React Developer, .NET Developer, Powerlifter"/>
            </Helmet>
            <Header
                theme={props.theme}
                setTheme={props.setTheme}
            />
            <ContactMe
                theme={props.theme}
            />
            <Email
                theme={props.theme}
            />
            <Footer
                theme={props.theme}
            />
        </div>
    )
};