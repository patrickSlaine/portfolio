import React,{useState,useEffect} from "react";
import "./BlogContent.css";
import ContentTypeSelector from "./DisplayObjects/ContentTypeSelector";


export default function BlogContent(props){

    const [blogContent, setBlogContent] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setBlogContent(props.blog);
        setLoading(false);
    },[props.blog])


    return(
        <>
            {loading? 
            <>
            </>
            :<article itemScope itemType="http://schema.org/Article">
                <div className="articleTitle" itemProp="about">{blogContent.title}</div>
                <div className="information">
                    <div className="info" itemProp="author">Author - {blogContent.author}</div>
                    <div className="info" itemProp="datePublished">Published - {blogContent.publishedDate}</div>
                    <div className="info" itemProp="dateModified">Updated - {blogContent.updatedDate}</div>
                </div>
                <br/>
                <div itemProp="articleBody">
                {blogContent.content.map((object,index)=>{
                    return <ContentTypeSelector type={blogContent} content={object} theme={props.theme} id={index}/>
                })}
                </div>
            </article>
            }
        </>
    )
}