import React from "react";
import SocialMedia from "../../components/SocialMedia";
import "./style.css";
import Fade from "react-reveal";

export  default function ContactMe(props){

  const theme = props.theme;
    
  const button_visit = {
    background: `${theme.accentColor}`,
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
  };

    return(
        <div className="contact-main">
          <Fade left duration={3000}>
            <div className="contact-image">
                <img className="image"
                    alt=""
                    src={require(`../../assets/images/patrick-graduation.jpg`)}
                />
            </div>
          </Fade>
          <Fade right duration={3000}>
            <div className="contact-text">
                <h1>
                    Contact Me
                </h1>
                <p>
                    You can contact me on LinkedIn or fill out the form below and I will contact you as quickly as possible.
                </p>
                <SocialMedia/>
                <br/>
                <a
                className="cv-button"
                style={button_visit}
              href={require(`../../assets/files/Patrick Slaine's CV.pdf`)}
              target="_blank"
              rel="noopener noreferrer"
            >
                See my CV
            </a>

            </div>
          </Fade>
        </div>
    )
}