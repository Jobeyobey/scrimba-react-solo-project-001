import React from "react"
import joe from "../images/joe-hollands.jpg"

export default function Info() {
    return (
        <div>
            <img src={joe} alt="Picture of Joe Hollands with a coffee" id="profile-image"/>
            <h2>Joe Hollands</h2>
            <h3>Front-End Developer</h3>
            <a href="https://github.com/Jobeyobey" target="_blank" rel="noreferrer">My Github</a>
            <div className="buttons">
                <button type="button">Email</button>
                <button type="button">GitHub</button>
            </div>
        </div>
    )
}