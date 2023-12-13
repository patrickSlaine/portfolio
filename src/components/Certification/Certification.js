import React from "react";
import "./style.css";
import Fade from "react-reveal";

export default function Certification(props){
    const certificate = props.certificate;
    const theme = props.theme;

    const styles = {
        boxShadow: `0px 2px 5px ${certificate.color_code}`,
        border: `1px solid ${certificate.color_code}`,
        ":hover": {
            boxShadow: `0 5px 15px ${certificate.color_code}`,
        },
    };

    return(
        <Fade bottom duration={6000}>
            <div style={styles}className="cert-card">
                <div className="content">
                    <a
                        href={certificate.certificate_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="content-overlay"></div>
                        <div 
                            className="cert-header"
                            style={{backgroundColor: certificate.color_code}}
                        >
                            <img
                                className="logo_img"
                                src={require(`../../assets/images/${certificate.logo_path}`)}
                                alt={certificate.alt_name}
                            />
                        </div>
                    </a>
                </div>
                <div className="cert-body">
                    <h2 className="cert-body-title" style={{color: theme.text}}>
                        {certificate.title}
                    </h2>
                    <h3 className="cert-body-subtitle" style={{color:theme.secondaryText}}>
                        {certificate.subtitle}
                    </h3>
                </div>
            </div>
        </Fade>
    )
}