import { skills } from "../../portfolio";
import "./style.css";
import React from "react";
import Fade from "react-reveal";

export default function SkillsList(props)
{
    const theme = props.theme;
    return (
        <div className="skillsList">
            <div className="skills-header-div">
                <h1 className="skills-header" style={{ color: theme.text }}>
                    Here's everything I do
                </h1>
            </div>
            {skills.data.map((skill)=>{
               return (
                <div className="skills-main-div">
                    <Fade left duration={3000}>
                        <div className="skills-image-div">
                            <img 
                                alt=""
                                className="skills-image"
                                src={require(`../../assets/images/${skill.image}`)}
                            />
                        </div>
                    </Fade>
                    <Fade right duration={3000}>
                        <div className="skill-text-div">
                            <h1 className="skill-heading" style={{color: theme.text}}>
                                {skill.title}
                            </h1>
                            <div>
                                {skill.skills.map((skillSentence)=>{
                                    return(
                                        <p className="skill-sentence" style={{color: theme.secondaryText}}>
                                            {skillSentence}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </Fade>            
                </div>
               )
            })}
        </div>
    )
}