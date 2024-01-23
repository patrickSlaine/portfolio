import React from "react";
import "./BlogOverview.css";
import {blogs} from "../../assets/blogs";
import BlogSummaryCard from "../../components/Blogs/BlogsSummaryCard";

export default function BlogsOverview(props){
    const theme = props.theme;

    return(
        <div className="main" id="Blogs">
            <div className="blogs-header-div">
                <h1 className="blogs-header" style={{color:theme.text}}>
                    Technical Blogs
                </h1>
                <div className="blogs-image-div">
                    <img className="blogs-image" src={require(`../../assets/images/blogs/IMG_2744.JPG`)} alt={"Patrick Slaine standing in front of the Brandenburg Gates in Berlin, Germany."} />
                </div>
                <div className="blogs-subtitle">
                    A collection of writings and blog posts about technical subject matters that interest me.<br/> Subjects I plan to post about include <b>Java</b>, <b>Cloud Architecture</b>, <b>Documentation</b>.
                    <br/> Enjoy the Read!
                </div>
            </div>
            <div className="blogs-content">
                {blogs["data"].map((blog,index)=>{
                    return <BlogSummaryCard key={index} blog={blog} theme={theme}/>
                })}
            </div>
        </div>
    )
};