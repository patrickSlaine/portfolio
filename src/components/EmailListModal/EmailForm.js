import React,{useState} from "react";
import { Form,Row,Col } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton';
import "./style.css";

export default function EmailForm({theme,status,message,onValidated}){
    const [email,setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [display, setDisplay] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            FIRSTNAME: firstName,
            LASTNAME: lastName,
        });
    }

    const styles = {
        backgroundColor: `${theme.accentBright}`,
        ":hover": {
          boxShadow: `0 5px 15px ${theme.accentBright}`,
        },
      };

    return(
    <div>
    {display === true ?
    <div className="email-list-main">
        <div>
            <div className="form-header">
                <div className="form-header-text">
                    Sign up to my Newsletter and stay up-to-date on Software Engineering!
                </div>
                <div className="form-close-button">
                    <CloseButton onClick={()=>setDisplay(false)}/>
                </div>
            </div>
            <div>
                <Form
                    className="form"
                    onSubmit={(e)=>handleSubmit(e)}
                >
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">
                                    Email Address
                                </Form.Label>
                                <Form.Control
                                    className="form-text"
                                    required
                                    placeholder="Enter Email Address"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">
                                    First Name
                                </Form.Label>
                                <Form.Control
                                    className="form-text"
                                    required
                                    placeholder="Enter First Name"
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">
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
                    <button style={styles} className="general-btn" type="submit">
                        Submit
                    </button>
                </Form>
            </div>
        </div>
    </div>
    :<></>}
    </div>
    )
} 