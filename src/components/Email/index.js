import React,{useState} from "react";
import {style} from "glamor";
import "./style.css";
import { Form,Row,Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import Fade from "react-reveal";

export default function Email(props){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [emailType, setEmailType] = useState("");
    const [emailInfo, setEmailInfo] = useState("");

    const theme = props.theme;

    const submitEmail = (evt) => {
        let fullName = firstName + " " + lastName;
        evt.preventDefault();
        var emailInfoObj = {
          name: fullName,
          email: email,
          emailType: emailType,
          emailInfo: emailInfo,
        };
    
        emailjs
          .send(
            "service_zofnf4m",
            "contact_form",
            emailInfoObj,
            "kW1ONuoly2lXEF5h5")
          .then(
            function (response) {
              setFirstName("");
              setLastName("");
              setEmail("");
              setEmailType("");
              setEmailInfo("");
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      };

    const styles = style({
        backgroundColor: `${theme.accentBright}`,
        ":hover": {
          boxShadow: `0 5px 15px ${theme.accentBright}`,
        },
      });

    return(
        <Fade bottom duration={6000}>
            <div className="email">
                <div className="email-header">
                    <h1>
                        Email
                    </h1>
                    <h4>
                        If you want to reach me directly by email, feel free to fill out the form below.
                    </h4>
                </div>
                <div className="email-main">
                    <div
                        class={
                        theme.name === "dark"
                            ? "screen-header"
                            : "screen-header-light"
                        }
                    >
                        <div className="email-topbar-left">
                            <div className="email-topbar-button close"></div>
                            <div className="email-topbar-button maximize"></div>
                            <div className="email-topbar-button minimize"></div>
                        </div>
                        <div className="email-topbar-right">
                            <div className="email-topbar-ellipsis"></div>
                            <div className="email-topbar-ellipsis"></div>
                            <div className="email-topbar-ellipsis"></div>
                        </div>
                    </div>
                    <div
                        class={
                            theme.name === "dark" ? "screen-body" : "screen-body-light"
                        }
                    >
                        <div className="screen-body-item">
                            <Form onSubmit={submitEmail}>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label 
                                                className="form-label"
                                            >
                                                First Name
                                            </Form.Label>
                                            <Form.Control 
                                                className="form-text"
                                                required
                                                placeholder="Enter First Name"
                                                value={firstName}
                                                onChange={(e)=> setFirstName(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label 
                                                className="form-label"
                                            >
                                                Last Name
                                            </Form.Label>
                                            <Form.Control 
                                                className="form-text"
                                                required
                                                placeholder="Enter Last Name"
                                                value={lastName}
                                                onChange={(e)=>setLastName(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group
                                    controlId="formEmail"
                                >
                                    <Form.Label 
                                        className="form-label"
                                    >
                                        Email Address
                                    </Form.Label>
                                    <Form.Control 
                                        className="form-text"
                                        type="email"
                                        required
                                        placeholder="Enter Email Address"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    controlId="formEnquiryReason"
                                >
                                    <Form.Label 
                                        className="form-label"
                                    >
                                        Query Reason
                                    </Form.Label>
                                    <Form.Control 
                                        className="form-text"
                                        as="select"
                                        required
                                        value={emailType}
                                        onChange={(e)=> setEmailType(e.target.value)}
                                    >
                                        <option disabled value="">
                                            Type of Query
                                        </option>
                                        <option>Query</option>
                                        <option>Job Offer</option>
                                        <option>Freelance Opportunity</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group
                                    controlId="formEnquiryInfo"
                                >
                                    <Form.Label 
                                        className="form-label"
                                    >
                                        Query
                                    </Form.Label>
                                    <Form.Control 
                                        as="textarea"
                                        rows={5}
                                        placeholder="Enter Enquiry Here..."
                                        value={emailInfo}
                                        onChange={(e)=> setEmailInfo(e.target.value)}
                                        className="form-text"
                                        required
                                    />
                                </Form.Group>
                                    <button {...styles} className="general-btn" type="submit">
                                        Submit
                                    </button>
                                </Form>      
                            </div>
                        </div>
                </div>      
            </div>
        </Fade>
    )
}