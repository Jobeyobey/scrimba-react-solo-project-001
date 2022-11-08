import React from "react"
import joe from "../images/joe-hollands.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function noSite(event) {
    window.alert("I don't actually have a website");
    event.preventDefault();
}

export default function Info() {
    return (
        <div className="info-container">
            <img src={joe} alt="Picture of Joe Hollands with a coffee" id="profile-image"/>
            <h2>Joe Hollands</h2>
            <h3>Front-End Developer</h3>
            <a href="" target="#" onClick={noSite}>jphollands.co.uk</a>
            <div className="button-container">
                <a href="mailto:hollands.joe@gmail.com" target="_blank" rel="noreferrer">
                    <button type="button" className="email"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                </a>
                <a href="https://github.com/Jobeyobey" target="_blank" rel="noreferrer">
                    <button type="button" className="github"><FontAwesomeIcon icon={faGithub} /> GitHub</button>
                </a>
            </div>
        </div>
    )
}