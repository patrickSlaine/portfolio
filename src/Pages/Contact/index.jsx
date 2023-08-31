import React from "react";
import Header from "../../components/Header";
import ContactMe from "../../containers/Contact/ContactMe";
import Email from "../../components/Email";
import Footer from "../../components/Footer";

export default function Contact(props){

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