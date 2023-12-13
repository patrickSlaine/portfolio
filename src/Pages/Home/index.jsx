import React,{useEffect} from "react";
import Header from "../../components/Header";
import Introduction from "../../containers/Introduction/Introduction";
import SkillsList from "../../components/SkillsList";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export default function Layout(props){

    const location = useLocation();
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return(
    <>
        <div>
        <div className="router-view-body" id="main">
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