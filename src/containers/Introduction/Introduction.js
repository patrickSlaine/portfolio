import React from "react";
import {introduction} from "../../portfolio";
import "./Introduction.css";
import SocialMedia from "../../components/SocialMedia";
import { ReactSVG } from "react-svg";

export default function Introduction(props){
    const theme = props.theme;

    return (
        <div className="intro-main" id="introduction">
            <div className="introduction-main">
                <div>
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
                <div className="introduction-image">
                    <ReactSVG src={require(`../../assets/images/homePageImage.svg`)}/>
                </div>
            </div>
        </div>
    )
}