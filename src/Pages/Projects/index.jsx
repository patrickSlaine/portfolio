import React from "react";
import Header from "../../components/Header";
import ProjectsIntroduction from "../../containers/Projects/ProjectsIntroduction";
import ProjectsCard from "../../components/Project/ProjectsCard";
import {projects} from "../../assets/portfolio";
import "./style.css";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

export default function Projects(props){

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <link rel="canonical" href="https://www.patrickslaine.co.uk/projects" />
                <meta name="description" property="og:description" content="Find out more about the Personal Projects that I have worked on. | Microsoft Azure | Javascript | Java | .NET"/>
                <title>Patrick Slaine | Software Engineer | Projects</title>
                <meta name="title" property="og:title" content="Patrick Slaine | Software Engineer | Projects"/>
                <meta name="type" property="og:type" content="website"/>
                <meta name="image" property="og:image" content="https:/www.patrickslaine.co.uk/images/PatrickSlaineHeadshot.jpg"/>
                <meta name="url" property="og:url" content="https://www.patrickslaine.co.uk"/>
                <meta name="keywords" content="Patrick Slaine, Software Engineer, Software Developer, React Developer, .NET Developer, Powerlifter"/>
            </Helmet>
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