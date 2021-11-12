import React from 'react'

export default function User(props) {
    return (
        <div className="userContainer">
            <p>{props.name}</p>
            <button className="deactivatebtn">
            Deshabilitar
          </button>
            
        </div>
    )
}
