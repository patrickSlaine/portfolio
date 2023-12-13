import React, {useEffect} from "react";
import Header from "../../components/Header";
import ContactMe from "../../containers/Contact/ContactMe";
import Email from "../../components/Email";
import Footer from "../../components/Footer";
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga";

export default function Contact(props){

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