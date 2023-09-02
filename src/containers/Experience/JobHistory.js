import React from "react";
import { ReactSVG } from "react-svg";
import "./style.css";
import { experience } from "../../portfolio";
import ExperienceCard from "../../components/Experience/ExperienceCard";

export default function JobHistory(props){

    return(
        <div>
            <div className="experience-main">
                <img 
                    className="experience-image"
                    src={require(`../../assets/images/experience.svg`)}
                />
                    {/* <ReactSVG 
                        src={require(`../../assets/images/experience.svg`)}
                        beforeInjection={(svg) => {
                            svg.setAttribute('style', 'width: 300px')
                            svg.setAttribute('style', 'height: 300px')
                            svg.setAttribute('style','max-width:300px')
                            svg.setAttribute('style','max-height:300px')
                        }}
                    /> */}
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