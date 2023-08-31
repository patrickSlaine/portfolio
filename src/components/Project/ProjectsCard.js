import React from "react";
import "./style.css";
import {style} from "glamor";

export default function ProjectsCard(props){

    const project = props.project;
    const theme = props.theme;

    function openNewWindow(url){
        var win = window.open(url,"__blank");
        win.focus();
    }

    const styles = style({
        color: "rgb(88, 96, 105)",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
        padding: "2rem",
        cursor: "pointer",
        borderRadius: "5px",
        height: "100%",
        transition: "all 0.2s ease-in-out",
        ":hover": {
          boxShadow: `${theme.imageDark} 0 2px 15px`,
        },
      });
    

    return(
        <div className="flex-container">
            <div
                {...styles}
                key={project.id}
                onClick={()=>openNewWindow(project.url)}
                style={{backgroundColor:theme.projectCard, overflow:"auto"}}
            >
                <div className="repo-name-div">
                    <p className="repo-name" style={{color:theme.text}}>
                        {project.name}
                    </p>
                </div>
                <div className="repo-description-container" style={{}}>
                    {" "}
                    <p className="repo-status" style={{color:theme.text}}>
                        {project.status}
                    </p>
                    {project.descriptions.map((sentence,index)=>{
                        return(
                            <p
                            key={index}
                            className="repo-description"
                            style={{color:theme.text}}
                            >
                                {sentence}
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}