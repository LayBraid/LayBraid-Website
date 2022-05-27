import React from "react";
import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="footer--content--social">
            <a href="https://github.com/LayBraid" className="footer--content--button">
                <FontAwesomeIcon className="footer--content--social--icon" icon={faGithub} />
            </a>
            <a href="https://twitter.com/laybraid" className="footer--content--button">
                <FontAwesomeIcon className="footer--content--social--icon" icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/clementloeuille/" className="footer--content--button">
                <FontAwesomeIcon className="footer--content--social--icon" icon={faInstagram} />
            </a>
        </div>
    )
}