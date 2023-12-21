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
            </div>
            <div className="blogs-content">
                {blogs["data"].map((blog,index)=>{
                    return <BlogSummaryCard key={index} blog={blog} theme={theme}/>
                })}
            </div>
        </div>
    )
};