import React from "react";
import "./style.css";

export default function Section(props){

    return (
        <div className="sectionHeader">{props.value}</div>
    )
}