import React from "react"; 
import "./style.css";

export default function Image(props){

    return (
        <img 
            className="image-content"
            itemProp="image"
            src={require(`../../../assets/images/blogs/`+props.value)}
            alt={props.alt}
        />
    )
}