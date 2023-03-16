import React from "react"
import "./App.css"

function User(props) {

    return(
        <div className = "grid-item">
            <img src = {props.data.imageUrl}/>
            <div className = "grid-item-description"> 
                <h3>{`${props.data.prefix} ${props.data.name} ${props.data.lastName}`}</h3>
                <p>{props.data.title}</p>
            </div>
        </div>
    )
}

export default User;