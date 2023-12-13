import React from "react";
import SocialMedia from "../../components/SocialMedia";
import "./style.css";
import Fade from "react-reveal";

export  default function ContactMe(props){

  const theme = props.theme;
    
  const button_visit = {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${theme.accentColor}`,
    padding: "10px 10px",
    marginTop: "25px",
    borderRadius: "4px",
    fontSize: "25px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
    textAlign: "center",
    backgroundColor: theme.accentColor
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