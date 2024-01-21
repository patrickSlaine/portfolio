import React from "react";
import "./style.css";

export default function Section(props){

    return (
        <a className="sectionHeaderLink" href={"#"+props.value}>
            <div className="sectionHeader">{props.value}</div>
        </a>
    )
}