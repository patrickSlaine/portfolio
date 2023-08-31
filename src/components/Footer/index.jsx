import React from "react";
import "./style.css";

export default function Footer(props){
    return(
        <div className="footer">
            <div className="footer-text">
                <h4 style={{color:props.theme.secondaryText}}>
                Made using <span role="img">⚛️</span> by Patrick Slaine
                </h4>
            </div>
        </div>
    )
}