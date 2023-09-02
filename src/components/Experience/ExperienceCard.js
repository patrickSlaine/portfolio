import React from "react";
import "./style.css";

export default function ExperienceCard(props){
    const job = props.job;
    const theme = props.theme;

    return (
        <div 
            className="experience-card"
            style={{
                backgroundColor:theme.imageDark,
            }}
        >
            <div className="experience-card-logo-div">
                <img
                    className="experience-card-logo"
                    src={require(`../../assets/images/${job.logo_path}`)}
                    alt={job.company}
                />
            </div>
            <div className="experience-card-body-div">
                <div className="experience-card-header-div">
                    <div className="experience-card-heading-left">
                        <h3 className="experience-card-title" style={{color:theme.text}}>
                            {job.title}
                        </h3>
                        <p 
                            className="experience-card-company" 
                            style={{color:theme.secondaryText}}
                        >
                            <a
                                href={job.company_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {job.company}
                            </a>
                        </p>
                    </div>
                    <div className="experience-card-heading-right">
                        <p
                            className="experience-card-duration"
                            style={{color:theme.secondaryText}}
                        >
                            {job.duration}
                        </p>
                        <p 
                            className="experience-card-location"
                            style={{color:theme.secondaryText}}
                        >
                            {job.location}
                        </p>
                    </div>
                </div>
                <p
                    className="experience-card-description"
                    style={{color:theme.text}}
                >
                    {job.description}
                </p>
            </div>  
        </div>
    );
}