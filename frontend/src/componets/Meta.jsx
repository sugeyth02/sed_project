import React from 'react'

export default function Meta(props) {
    return (
        <div className = "metaContainer">
            <h1>{props.meta}</h1>
            <div className = "submetaContainer">
                <p>Ahorrado: <b>{props.ahorrado}</b></p>
                <p>Restante: <b>{props.restante}</b></p>
            </div>
        </div>
    )
}
