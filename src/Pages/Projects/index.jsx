import React from "react";
import Header from "../../components/Header";
import ProjectsIntroduction from "../../containers/Projects/ProjectsIntroduction";
import ProjectsCard from "../../components/Project/ProjectsCard";
import {projects} from "../../portfolio";
import "./style.css";
import Footer from "../../components/Footer";

export default function Projects(props){

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