import React from "react";
import { ReactSVG } from "react-svg";
import "./JobHistory.css";
import { experience } from "../../portfolio";
import ExperienceCard from "../../components/Experience/ExperienceCard";

export default function JobHistory(props){

    return(
        <div>
            <div className="experience-main">
                <div className="experience-image">
                    <ReactSVG 
                        src={require(`../../assets/images/experienceImage.svg`)}
                        beforeInjection={(svg) => {
                            svg.setAttribute('style', 'width: 300px')
                            svg.setAttribute('style', 'height: 300px')
                            svg.setAttribute('style','max-width:300px')
                            svg.setAttribute('style','max-height:300px')
                        }}
                    />
                </div>
                <div className="experience-text">
                    <h1>
                        {experience["title"]}
                    </h1>
                    <p>
                        {experience["description"]}
                    </p>
                </div>
            </div>
            <div className="experience-jobs">
                    {experience["sections"]["experiences"].map((job,index)=>{
                        return <ExperienceCard key={index} theme={props.theme} job={job}/>
                    })}
                </div>
        </div>
    )
}