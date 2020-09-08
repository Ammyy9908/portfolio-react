import React from 'react'

function Skills(props) {
    return (
        <div style={{"marginTop":"45px","maxWidth":"600px"}}>
            <h2 className="title">{props.skill}</h2>
            <progress class="progress is-dark" value={props.value} max="100">{props.value}%</progress>
        </div>
    )
}

export default Skills
