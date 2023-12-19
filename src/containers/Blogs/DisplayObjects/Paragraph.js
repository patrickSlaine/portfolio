import React from "react"; 
export default function Paragraph(props){
    return (
        <p className={"paragraph-content"}>
            {props.value}
        </p>
    )
}