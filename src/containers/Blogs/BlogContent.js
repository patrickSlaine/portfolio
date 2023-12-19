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
            :<>
                {blogContent.content.map((object,index)=>{
                    return <ContentTypeSelector content={object} theme={props.theme} id={index}/>
                })}
            </>
            }
        </>
    )
}