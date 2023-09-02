import React from "react";
import "./style.css";
import {certifications} from "../../portfolio";
import Certification from "../../components/Certification/Certification";

export default function Certifications(props){
    const theme = props.theme;

    return(
        <div className="main" id="certs">
            <div className="certs-header-div">
                <h1 className="certs-header" style={{color:theme.text}}>
                    Certifications
                </h1>
            </div>
            <div className="certs-body-div">
                {certifications.certifications.map((cert,index)=>{
                    return <Certification key={index} certificate={cert} theme={theme}/>
                })}
            </div>
        </div>
    )
}