import React, {useEffect} from "react";
import Header from "../../components/Header";
import ProjectsIntroduction from "../../containers/Projects/ProjectsIntroduction";
import ProjectsCard from "../../components/Project/ProjectsCard";
import {projects} from "../../assets/portfolio";
import "./style.css";
import Footer from "../../components/Footer";
import ReactGA from "react-ga";
import {useLocation} from "react-router-dom";

export default function Projects(props){

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
            <ProjectsIntroduction
                theme={props.theme}
            />
            <div className="projects-card">
            {projects.data.map((p)=>{
                return(
                    <ProjectsCard
                        project={p}
                        theme={props.theme}
                    />
                )
            })}
            </div>
            <Footer
                theme={props.theme}
            />
        </div>
    )
}