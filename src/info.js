import React from "react"
import joe from "./joe-hollands.jpg"

export default function Info() {
    return (
        <div>
            <img src={joe} alt="Picture of Joe Hollands with a coffee" id="profile-image"/>
            <h1>Joe Hollands</h1>
            <h2>Front-End Developer</h2>
            <a href="https://github.com/Jobeyobey" target="_blank" rel="noreferrer">My Github</a>
        </div>
    )
}