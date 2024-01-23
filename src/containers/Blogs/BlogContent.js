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
            :<article className="article" itemScope itemType="http://schema.org/Article">
                <img className="articleImage" itemProp="image" alt={blogContent.title} src={require(`../../assets/images/blogs/${blogContent.summary_image_path}`)}/>
                <div className="articleHeader">
                    <div className="articleTitle" itemProp="about">{blogContent.title}</div>
                    <div className="subTitle" itemProp="abstract">{blogContent.introductionParagraph}</div>
                    <div className="information">
                        <img className="person-image" alt="" src={require(`../../assets/images/blogs/PatrickSlaineHeadshot.jpg`)}/>
                        <div className="info-div">
                            <div className="info" itemProp="author">By {blogContent.author}</div>
                            <div className="info" itemProp="datePublished">{blogContent.publishedDate}</div>
                        </div>
                    </div>
                </div>
                <div className="articleBody" itemProp="articleBody">
                {blogContent.content.map((object,index)=>{
                    return <ContentTypeSelector type={blogContent} content={object} theme={props.theme} id={index}/>
                })}
                </div>
            </article>
            }
        </>
    )
}