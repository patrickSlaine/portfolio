import React from "react";
import "./style.css";
import Fade from "react-reveal";

export default function DegreeCard(props){
    const degree = props.degree;
    const theme = props.theme;

    const style_img = {
        width: "220px",
        height: "auto",
        borderRadius: "25%",
        padding: "10px",
        border: `1px solid ${theme.accentColor}`,
        marginRight: "50px",
        boxShadow: `0px 0px 5px ${theme.accentColor}`,
        transition: "all 0.2s ease-in-out",
        ":hover": {
            color: "rgba(255,255,255,1)",
            boxShadow: `0 5px 15px ${theme.accentColor}`,
        },
        "@media (max--width: 768px)":{
            marginLeft: "50px",
            marginBottom: "15px",
            width: "175px",
        }
    };

    
  const card_body = {
    borderBottom: `1px solid ${theme.accentColor}`,
    borderLeft: `1px solid ${theme.accentColor}`,
    borderRight: `1px solid ${theme.accentColor}`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    fontSize: "25px",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  };

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
    marginRight: "23px",
    float: "right",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
    backgroundColor: theme.accentColor,
  };

  
  return (
    <div className="degree-card">
      <Fade left duration={3000}>
        <div style={style_img}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(50%, 50%)",
            }}
            src={require(`../../assets/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </Fade>
      <Fade right duration={3000}>
        <div style={card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, index) => {
              return (
                <p
                  key={index}
                  className="content-list"
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                style={button_visit}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}