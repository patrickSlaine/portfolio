import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import EmailForm from "./EmailForm";

export default function EmailListModal(props){

    const postUrl = `https://patrickslaine.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return(
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({subscribe,status,message})=>(
                    <EmailForm 
                        theme={props.theme}
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
            
        </>
    )
};
