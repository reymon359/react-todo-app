import React from 'react'


function Header(){

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 19) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }

    return (
        <header className="navbar">
            <div>Todo App</div> 
            <small>Good {timeOfDay}! Here you can write your tasks</small>
        </header>
    )

}

export default Header