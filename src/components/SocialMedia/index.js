import React from "react";
import "./SocialMedia.css";
import {socialMediaLinks} from "../../portfolio";
import { SocialIcon } from "react-social-icons";
export default function SocialMedia(){
    return(
        <div className="social-media-div">
            <a 
                href={socialMediaLinks.gitHub}
                className="icon-button github"
                target="_blank"
                rel="noopener noreferrer"
                >
                <SocialIcon url={socialMediaLinks.gitHub} />
            </a>

            <a 
                href={socialMediaLinks.linkedin}
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer">
                <SocialIcon url={socialMediaLinks.linkedin}/>
            </a>
        </div>
    )
}