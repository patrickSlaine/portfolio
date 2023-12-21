import React from "react"; 
export default function Paragraph(props){
    return (
        <p className={"paragraph-content"} itemProp="speakable">
            {props.value}
        </p>
    )
}