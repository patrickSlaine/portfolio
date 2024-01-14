exports.blogs = {
    data:[
       // {
        //     blogId: 1,
        //     summary_image_path: "patrick-graduation.jpg",
        //     summary_image_alt_name: "Image Of Patrick Slaine",
        //     title: "Introduction to Me",
        //     author: "Patrick Slaine",
        //     publishedDate: "16/12/2023",
        //     updatedDate:"21/12/2023",
        //     keywords: "",
        //     summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum tortor orci, vitae vestibulum purus volutpat in. Nullam sit amet nisi quis tellus tincidunt tincidunt in et lectus. Morbi lobortis posuere efficitur. Phasellus aliquet dapibus velit quis sollicitudin. Cras ornare turpis leo, eget tempor nunc congue nec. Sed dignissim neque non eros tempor imperdiet. Phasellus ultricies, lacus sed ultrices ultricies, elit urna congue quam, non laoreet leo turpis sit amet nisi. Nam fermentum non augue vel rutrum. Aliquam erat volutpat. Duis nulla leo, volutpat at cursus id, congue in tellus. Praesent condimentum tortor quis magna gravida finibus. Aliquam elit risus, volutpat at porta nec, commodo ac elit. Aenean tempus ipsum eget fermentum auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi accumsan blandit mi sit amet congue.",
        //     content:[
        //         {
        //             type:"header",
        //             value:"This is a Section Header"
        //         },
        //         {
        //             type:"paragraph",
        //             value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum tortor orci, vitae vestibulum purus volutpat in. Nullam sit amet nisi quis tellus tincidunt tincidunt in et lectus. Morbi lobortis posuere efficitur. Phasellus aliquet dapibus velit quis sollicitudin. Cras ornare turpis leo, eget tempor nunc congue nec. Sed dignissim neque non eros tempor imperdiet. Phasellus ultricies, lacus sed ultrices ultricies, elit urna congue quam, non laoreet leo turpis sit amet nisi. Nam fermentum non augue vel rutrum. Aliquam erat volutpat. Duis nulla leo, volutpat at cursus id, congue in tellus. Praesent condimentum tortor quis magna gravida finibus. Aliquam elit risus, volutpat at porta nec, commodo ac elit. Aenean tempus ipsum eget fermentum auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi accumsan blandit mi sit amet congue."
        //         },
        //         {
        //             type: "image",
        //             value:"patrick-graduation.jpg",
        //             alt: "Patrick Slaine's Graduation"
        //         },
        //         {
        //             type:"bulletpoint",
        //             before:"Before the bulletpoints",
        //             content:[
        //                 {value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        //                 {value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        //                 {value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        //                 {value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        //             ]    
        //         },
        //         {
        //             type:"numbered",
        //             before:"Before the numbered points",
        //             content:[
        //                 {id:1,value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        //                 {id:2,value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        //                 {id:3,value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        //                 {id:4,value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        //             ]
        //         }
        //     ]     
        // }
        {
            blogId: 1,
            summary_image_path: "patrick-graduation.jpg",
            summary_image_alt_name: "Microservice Documentation Image",
            title: "Microservice Readme Documentation",
            author: "Patrick Slaine",
            publishedDate: "14/01/2024",
            updatedDate:"14/0/2024",
            keywords: "Microservices,Readme Documentation, Markdown, Architecture",
            summary: "An introduction to the important aspects of Microservice Documentation. How you should structure your Readme documentation... The Benefits of maintaining Living Documentation and how you can ensure knowledge of decision-making is maintained with time.",
            content:[
                {
                    type:"header",
                    value:"Microservice Readme Documentation"
                },
                {
                    type:"paragraph",
                    value:"Software Engineers are quickly moving away from maintaining Monolithic applications and breaking their codebases down into microservices. Microservice adoption has had a range of benefits from improved scalability to faster time to market. However, since microservices are often developed by separate teams, there is a need to standardize the documentation process to facilitate fast developer onboarding and to reduce the accumulation of technical debt. \nI would like to share with you the steps which I have been following to document my microservice applications, in both enterprise and personal development."
                },
                {
                    type:"header",
                    value:"Repository Introduction"
                },
                {
                    type:"numbered",
                    before:"Write a concise description of the functionality of the repository. This should be contained within the top-level of your README documentation. Important information which may be relevant to this section includes:",
                    content:[
                        {id:1,value:"An introduction to how the application relates to the wider application ecosystem."},
                        {id:2,value:"An overview of technology choices made within the application like Java or Azure and how the application communicates with other systems."},
                        {id:3,value:"Links to relevant development tools such as the CI/CD pipelines and the Cloud hosting environment."}
                    ]
                },{
                    type:"paragraph",
                    value:"All of the following content should be contained in its own MARKDOWN (.md) file and linked to the main README.md file."
                },
                {
                    type:"header",
                    value:"Development Set-Up Instructions"
                },
                {
                    type:"numbered",
                    before:"Application start-up information should be included in a concise manner. A new developer onboarding to the application should be able to do the following with-out requiring assistance:",
                    content:[
                        {id:1,value:"Execute commands to install project dependencies."},
                        {id:2,value:"Compile and build the source code."},
                        {id:3,value:"Run the application locally."}
                    ]
                },
                {
                    type:"header",
                    value:"Code Documentation"
                },
                {
                    type:"paragraph",
                    value:"In-order to enable fast developer onboarding and reduce the level on technical debt that is contained within the application. The documentation should contain concise documentation explaining the primary functionality of the application."
                },
                {
                    type:"bulletpoint",
                    before:"I have found the following diagrammatic tools to be useful when documenting applications.",
                    content:[
                        {id:1,value:"Flow Charts"},
                        {id:2,value:"Sequence Diagrams"},
                        {id:3,value:"Pseudocode for Complex Algorithms"}
                    ]
                },
                {
                    type:"header",
                    value:"Architecture Documentation"
                },
                {
                    type:"paragraph",
                    value: "A record of the architecture of the application is important to ensure that developer have a strong understanding of how the application fits into the wider software ecosystem. Primarily this will include an Architecture Diagram and a written summary."
                },
                {
                    type:"paragraph",
                    value:"However, if your application is expected to be maintained for long periods of time. It’s important to include Architecture Design Records (ADR).  An ADR is a justification for a software design choice that addresses a functional or a non-functional requirement which is architecturally significant. Checkout this GitHub resource which explains how to properly structure ADR’s. https://adr.github.io/"
                },
                {
                    type:"header",
                    value:"Development Links"        
                },
                {
                    type:"bulletpoint",
                    before: "To reduce the amount of ambiguity regarding where Software resources are located the documentation should contain a link to important developer resources like:",
                    content:[
                        {id:1,value:"Links to CI/CD pipelines, Code Scanning tools & Cloud Environments."},
                        {id:2,value:"Links to Design Documentation."},
                        {id:3,value:"Kanban Boards"}
                    ]
                }
            ]
        }
    ]
};