import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareInstagram, faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return(
        <footer>
            <h1>Footer Below</h1>
            <a href="" target="_blank"><FontAwesomeIcon icon={faSquareGithub} /></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </footer>
    )
}