import React,{useEffect,useState} from "react";
import Paragraph from "./Paragraph";
import Image from "./Image";
import List from "./List";
import Section from "./Section";

export default function ContentTypeSelector(props){
    const [content,setContent] = useState();
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        setContent(props.content);
        setLoading(false);
    },[props.content])

    return (
        <>
            {loading ?
            <></>
            :
            <>
                {(()=>{
                    switch(content.type){
                        case "paragraph":
                            return <Paragraph value={content.value}/>
                        case "image":
                            return <Image value={content.value} alt={content.alt}/>
                        case "bulletpoint":
                        case "numbered":
                            return <List type={content.type} before={content.before} content={content.content}/>
                        case "header":
                            return <Section value={content.value}/>
                        default:
                            return <></>
                    }
                })()}
            </>
            }
        </>
    )
}