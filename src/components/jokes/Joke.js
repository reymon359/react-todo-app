import React from "react"

function Joke(props) {
    return (
        <div className="joke">
            <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
            <p style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</p>
        </div>
    )
}

export default Joke