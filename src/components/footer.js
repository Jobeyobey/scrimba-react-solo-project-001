import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareInstagram, faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return(
        <footer>
            <a href="https://github.com/Jobeyobey" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faSquareGithub} /></a>
            <a href="https://www.instagram.com/jobeyobeyo/?hl=en" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a href="https://www.linkedin.com/in/joehollands/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        </footer>
    )
}