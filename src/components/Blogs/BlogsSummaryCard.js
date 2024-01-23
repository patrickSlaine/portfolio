import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

export default function BlogSummaryCard(props){
    const blog = props.blog;
    const theme = props.theme;

    const style_card = {
        borderBottom: `1px solid ${theme.accentColor}`,
        borderLeft: `1px solid ${theme.accentColor}`,
        borderRight: `1px solid ${theme.accentColor}`,
        borderTop: `1px solid ${theme.accentColor}`,
        boxShadow: `0px 1px 5px ${theme.accentColor}`,
        ":hover": {
            color: "rgba(255, 255, 255, 1)",
            boxShadow: `0 5px 15px ${theme.accentColor}`,
          },
    }

    return (
        <div 
            className="blog-summary-card"
            style={style_card}
        >
            <Link className="blog-link" relative to={"/blogs/"+blog.blogId} style={{ color: 'inherit',textDecoration: 'none' }}>
                <div className="blog-summary-image">
                    <img
                        style={{
                            maxWidth:"100%",
                            maxHeight:"100%",
                            borderRadius:"10%",
                            border: `1px solid ${theme.accentColor}`,
                            boxShadow: `0px 0px 5px ${theme.accentColor}`,
                            ":hover": {
                                color: "rgba(255,255,255,1)",
                                boxShadow: `0 5px 15px ${theme.accentColor}`,
                            }
                        }}
                        src={require(`../../assets/images/blogs/${blog.summary_image_path}`)}
                        alt={blog.summary_image_alt_name}
                    />
                </div>
                <div 
                    className="blog-summary-main"
                >
                    <div className="body-header">
                        <div className="body-header-title">
                            <h2>
                                {blog.title}
                            </h2>
                        </div>
                        <div className="body-header-dates">
                            <div className="body-header-date">
                                Published: {blog.publishedDate}
                            </div>
                            <div className="body-header-date">
                                Updated: {blog.updatedDate}
                            </div>
                        </div>
                    </div>
                    <div className="body-content">
                        {blog.summary}
                    </div>
                </div>
            </Link>
        </div>
    )
}