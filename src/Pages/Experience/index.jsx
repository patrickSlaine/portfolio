import React,{useEffect} from "react";
import Header from "../../components/Header";
import JobHistory from "../../containers/Experience/JobHistory";
import Footer from "../../components/Footer";
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga";

export default function Experience(props){
    
    const location = useLocation();
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return (
        <>
            <div>
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