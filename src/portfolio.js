
export const introduction = {
    title: "Hello",
    title2: "Patrick",
    logo_name: "PatrickSlaine",
    fullName: "Patrick Slaine",
    subTitle: "Software Engineer - 1st Class Honors, Aspiring to build upon my Full-Stack Software Development skills."
}

export const socialMediaLinks = {
    gitHub:"https://github.com/patrickSlaine",
    linkedin:"https://www.linkedin.com/in/patrick-slaine/"
}

export const skills = {
    data: [
        {
            title: "C#/.NET Software Development",
            image:"back-end.svg",
            skills: [
                "💎 Developed Services using .NET 6 and Entity Framework Core.",
                "💎 Used Docker to containerise Microservices.",
                "💎 Experienced testing using JUnit, Moq and Specflow.",
                "💎 Developed Continuous Integration & Continuous Delivery pipelines using Azure DevOps."
            ]
        },
        {
            title: "React / Front-End Development",
            image:"front-end.svg",
            skills: [
                "💎 Developed responsive user interfaces which function are platform agnostic.",
                "💎 Experienced with a variety of technologies including React, Javascript, OAuth & NPM.",
                "💎 Integrated with Back-End services using axios.",
                "💎 Experienced at hosting sites across a variety of Cloud Providers."
            ]
         }
    ]
}

export const degree = {
    degrees: [
        {
            title: "BSC Software Engineering with Digital Technology Partnership - First Class Honors",
            subtitle: "Queens University Belfast",
            logo_path: "qub.png",
            alt_name: "SE",
            duration: "2019 - 2023",
            descriptions: [
                "💎 Studied a range of Software engineering topics including DBMS, Data Structures, Secure Software Development and Software Design Principles.",
                "💎 Learned a number of programming languages including Java, C#, SQL, Python and Javascript.",
                "💎 I have built upon my experience by working on personal projects revolving around Cloud Computing and Microservices."
            ],
            website_link:
            "https://www.qub.ac.uk/courses/undergraduate/software-engineering-digital-technology-partnership-beng-g606/"
        }
    ]
}

export const certifications = {
    certifications: [
        {
            title:"Microsoft Certified: Azure Data Fundamentals",
            subtitle:"Microsoft",
            logo_path:"microsoft.jpg",
            certificate_link:"https://www.credly.com/badges/0b46558d-214e-43d5-a251-aa80c89e259f/linked_in_profile",
            alt_name:"Microsoft",
            color_code:"#ffffff",
        },
        {
            title:"Mendix Rapid Developer",
            subtitle:"Mendix",
            logo_path:"mendix.jpg",
            certificate_link:"",
            alt_name:"Mendix",
            color_code:"#146ff4",
        },
        {
            title:"Communicating Persuasively & Building Trust",
            subtitle:"Stanford University Graduate School of Business",
            logo_path:"stanford.jpg",
            certificate_link:"",
            alt_name:"Stanford",
            color_code:"#a4001e",
        },
        {
            title:"Alteryx Designer Core Certified",
            subtitle:"Alteryx",
            logo_path:"alteryx.jpg",
            certificate_link:"https://s3.us-east-2.amazonaws.com/ayx.certificates2/20210810_AlterxDesignerCoreMjU4ODUwOmRlc2lnbmVLWNvcmU6Nkx.pdf",
            alt_name:"Alteryx",
            color_code:"#ffffff",
        },
        {
            title:"Microsoft Certified: Azure Fundamentals",
            subtitle:"Microsoft",
            logo_path:"microsoft.jpg",
            certificate_link:"https://www.credly.com/badges/30a4d136-bbb8-4f54-8294-8e6d9080b510/linked_in_profile",
            alt_name:"Microsoft",
            color_code:"#ffffff",  
        },
        {
            title:"UiPath Certified RPA Associate v1.0 (UiRPA)",
            subtitle:"UiPath",
            logo_path:"uipath.jpg",
            certificate_link:"",
            alt_name:"UiPath",
            color_code:"#fa4616",
        },
        {
            title:"BDD-Masterclass",
            subtitle:"SpecFlow",
            logo_path:"specflow.jpg",
            certificate_link:"https://specflow.org/community/webinars/certificate/?c=4a6a5ebe669ad0e5d502c929a",
            alt_name:"SpecFlow",
            color_code:"#ffffff",
        },
        {
            title: "Getting Started With SpecFlow in Visual Studio",
            subtitle:"SpecFlow",
            logo_path:"specflow.jpg",
            certificate_link:"https://specflow.org/community/webinars/certificate/?c=a792a72d54f5b0095163a4ffe",
            alt_name:"SpecFlow",
            color_code:"#ffffff",
        },
        {
            title: "Microsoft Certified: Data Analyst Associate",
            subtitle: "Microsoft",
            logo_path:"microsoft.jpg",
            certificate_link: "https://www.credly.com/badges/7516c1ad-3ab0-45c9-a7f4-d98cfa4d8e2d/public_url",
            alt_name: "Microsoft",
            color_code:"#ffffff"
        }
    ]
}

export const experience = {
    title:"Experience and Work History",
    description:"Throughout my time as an undergraduate at Queen's University, I gained experience with PriceWaterhouseCooper as part of my Technology Degree Apprenticeship. Following the conclusion of University, I joined Citi as a Software Engineer in-order to gain experience within the Financial Sector.",
    header_image_path:"experience.svg",
    sections:{
        title:"Work Experience",
        experiences:[
            {
                title:"Software Engineer",
                company:"Citi",
                company_url:"https://www.citigroup.com/global",
                logo_path:"citi.svg",
                duration:"September 2023 - Present",
                location:"Belfast",
                description:"Within the Operations & Technology sector, I am actively engaged in the development of Big Data Applications using Java, Bash, Apache Spark, and Hadoop. My role within the Agile framework involves robust support for applications during production releases. I have further honed my capabilities by acquiring expertise in Jenkins, Hive, and Autosys platforms.",
                color:"#0071C5"
            },
            {
                title:"Technology Degree Apprentice",
                company:"PwC",
                company_url:"https://www.pwc.co.uk/",
                logo_path:"pwc.png",
                duration:"September 2019 - July 2023",
                location:"Belfast",
                description:"As part of my apprenticeship, I was trained as a C#/.NET Developer and gained experience developing and testing microservices using technologies such as Docker, Azure DevOps and Mass Transit. I also designed, developed and tested a front-end microservice using React. This front-end service was integrated with a back-end microservice and was also integrated with an AuthO SSO provider.",
                color:"#0071C5"
            },
            {
                title:"Sales Associate",
                company:"McCloy's Kilrea",
                company_url:"https://www.mccloys-jewellery.com/",
                logo_path:"mccloys.png",
                duration:"June 2017 - February 2019",
                location:"Kilrea",
                description:"During this period, I was responsible for addressing customer enquiries, managing stock levels using an EPOS system. I also took responsibility for mentoring new staff.",
                color:"#0071C5"
            }
        ]
    }
}

export const projects = {
    data:[
        {
            id:"1",
            name:"My Portfolio",
            status:"Constant Development",
            url:"",
            descriptions:[
                "💎 Portfolio to demonstrate my skills as a Front-End Developer.",
                "💎 Functionality to send emails directly to me.",
                "💎 Leveraged react-router-dom to create a Responsive Single Page Application.",
                "💎 Created a consistant overarching theme using CSS styling.",
                "💎 Hosted using Azure App Service."
            ]
        },
        {
            id:"2",
            name:"Dissertation Project",
            status: "Completed",
            url:"",
            descriptions:[
                "💎 Created a Wild Recording Platform to satisify stakeholder expectations.",
                "💎 Used a variety of technologies including Python, React, Azure App Service and Azure Functions.",
                "💎 Azure Functions was leveraged to run algorithms based on HTTP and Timer triggers.",
                "💎 Azure Blob Storage was used to store a large volume of images.",
                "💎 Used a variety of Javascript mapping libraries to create Graphical and Geospatial visualisations based on information deduced from images."
            ]
        }
    ]
}