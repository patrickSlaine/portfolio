import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogsOverview from "../../containers/Blogs/BlogsOverview";
import { Helmet } from "react-helmet";

export default function Blogs(props){

    return(
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <link rel="canonical" href="https://www.patrickslaine.co.uk/blogs" />
                <meta name="description" property="og:description" content="Patrick has been writing Blogs about challenges he has faced throughout his time as a Software Engineer. Have a look at my guides and tutorials to see what value it will add for you."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="title" property="og:title" content="Patrick Slaine | Software Engineer | Blogs"/>
                <meta name="type" property="og:type" content="website"/>
                <meta name="image" property="og:image" content="https:/www.patrickslaine.co.uk/images/Patrick Slaine Headshot.jpg"/>
                <meta name="url" property="og:url" content="https://www.patrickslaine.co.uk"/>
                <meta name="keywords" content="Patrick Slaine, Software Engineer, Software Developer, React Developer, .NET Developer, Powerlifter"/>
            </Helmet>
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