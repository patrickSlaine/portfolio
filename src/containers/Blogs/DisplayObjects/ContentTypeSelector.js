import React,{useEffect,useState} from "react";
import Paragraph from "./Paragraph";
import Image from "./Image";

export default function ContentTypeSelector(props){
    const theme = props.theme;
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
                        default:
                            return <></>
                    }
                })()}
            </>
            }
        </>
    )
}