import React, {useEffect,useState} from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {useParams,Navigate} from "react-router-dom";
import {blogs} from "../../assets/blogs";
import BlogContent from "../../containers/Blogs/BlogContent"; 
import { Helmet } from "react-helmet";

export default function Blog(props){

    const blogId = useParams();
    const [validBlog,setValidBlog] = useState(true);
    const [blog, setBlog] = useState(null);
    const [loading,setLoading] = useState(true);

    const searchBlogs= (id) =>{
        for (let i =0; i<blogs.data.length;i++){
            if(parseInt(blogs.data[i].blogId) === parseInt(id)){
                setBlog(blogs.data[i]);
                return true;
            }
        }
        return false;
    }



    useEffect(() => {
        const fetchBlog = (blogId) => {
            if (searchBlogs(blogId.id)===true){
                setValidBlog(true);
            }else{
                setValidBlog(false);
            }
        }

       fetchBlog(blogId); 
       setLoading(false);
    },[blogId])


    return (
        <>
        {loading === false?
        <>
            {validBlog ?
            <>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <link rel="canonical" href={"https://www.patrickslaine.co.uk/blogs/"+blog.blogId} />
                    <meta name="description" property="og:description" content={blog.summary}/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>{blog.title}</title>
                    <meta name="title" property="og:title" content={blog.title}/>
                    <meta name="type" property="og:type" content="website"/>
                    <meta name="image" property="og:image" content={"https:/www.patrickslaine.co.uk/images/"+blog.summary_image_path}/>
                    <meta name="url" property="og:url" content="https://www.patrickslaine.co.uk"/>
                    <meta name="keywords" content={blog.keywords}/>
                </Helmet>
                <Header
                    theme={props.theme}
                    setTheme={props.setTheme}
                />
                <BlogContent
                    theme={props.theme}
                    setTheme={props.setTheme}
                    blog={blog}
                /> 
                <Footer
                    theme={props.theme}
                />
            </>
            :
            <Navigate to="/"/>}
            </>
            :<></>}
        </>

    )
}
