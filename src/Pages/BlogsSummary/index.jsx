import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogsOverview from "../../containers/Blogs/BlogsOverview";

export default function Blogs(props){

    return(
        <div>
            <Header
                theme={props.theme}
                setTheme={props.setTheme}
            />
            <BlogsOverview
                theme={props.theme}
                setTheme={props.setTheme}
            />            
            <Footer
                theme={props.theme}
            />
        </div>
    )
};