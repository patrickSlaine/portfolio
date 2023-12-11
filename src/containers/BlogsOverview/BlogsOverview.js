import React from "react";

export default function BlogsOverview(props){
    const theme = props.theme;

    return(
        <div className="main" id="Blogs">
            <div className="blogs-header-div">
                <h1 className="blogs-header" style={{color:theme.text}}>
                    Technical Blogs
                </h1>
            </div>
        </div>
    )
};