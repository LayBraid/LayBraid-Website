import React, {Component} from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
    render() {
        return (
            <div className="profile--information--contact">
                <div className="profile--information--contact--button--email">
                    <a href="mailto:clement.loeuillet@epitech.eu" className="profile--information--contact--email">
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                    </a>
                </div>
                <div className="profile--information--contact--button--linkedin">
                    <a href="https://www.linkedin.com/in/clement-loeuillet/" className="profile--information--contact--linkedin">
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;