import React from "react";
import "./style.css";

export default function Footer(props){
    return(
        <div className="footer">
            <div className="footer-text">
                <div className="footerText" style={{color:props.theme.text}}>
                    PatrickSlaine
                </div>
                <div className="footerSubtext" style={{color:props.theme.secondaryText}}>
                    Copyright &copy; 2024, Patrick Slaine.
                </div>
                <div className="footerLinks">
                    <a className="footerLink" href="https://www.linkedin.com/in/patrick-slaine/" style={{color:props.theme.secondaryText}}>
                        LinkedIn
                    </a>
                    <a className="footerLink" href="https://www.github.com/patrickSlaine/" style={{color:props.theme.secondaryText}}>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}