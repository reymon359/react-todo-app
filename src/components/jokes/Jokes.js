import React from "react"

import Joke from "./Joke"

import jokesData from "./jokesData"

function Jokes() {
    
    // Using map to go through all the jokes in jokesData
    const jokeComponents = jokesData.sort(() => Math.random() - 0.5).slice(0, 2).map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
 
                
    return (
        <div  className="jokes">
            <b>By the way here are some jokes😄.</b>
            {jokeComponents}            
        </div>
    )
}

export default Jokes