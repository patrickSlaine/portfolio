import React from "react";
import {introduction} from "../../portfolio";
import "./style.css";
import SocialMedia from "../../components/SocialMedia";
import Fade from "react-reveal";

export default function Introduction(props){
    const theme = props.theme;

    return (
        <div className="intro-main" id="introduction">
            <div className="introduction-main">
                <Fade bottom duration={3000}>
                    <div className="introduction-text-div">
                        <h1 className="introduction-text">
                            {introduction.title}
                        </h1>
                        <p className="introduction-text-p" style={{color: theme.secondaryText}}>
                            <span>I'm </span>
                            <span style={{ color: theme.accentColor}}>
                                {introduction.fullName}{" "}
                            </span>
                            <span>
                                {introduction.subTitle}
                            </span>
                        </p>
                        <SocialMedia/>                    
                    </div>
                    </Fade>    
                <img className="introduction-image" alt="" src={require(`../../assets/images/homePageImage.svg`)}/>
            </div>
        </div>
    )
}