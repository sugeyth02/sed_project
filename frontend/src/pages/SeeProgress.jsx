import React from 'react'
import Nav from "../componets/Nav";
import Meta from '../componets/Meta';

export default function SeeProgress() {
    return (
        <div>
            <Nav name="Ver Progreso" />
            <Meta meta = "Meta #1" ahorrado="$X.xx"  restante="$X.xx"/>       
            <Meta meta = "Meta #2" ahorrado="$X.xx"  restante="$X.xx"/> 
            <Meta meta = "Meta #3" ahorrado="$X.xx"  restante="$X.xx"/> 
            <Meta meta = "Meta #4" ahorrado="$X.xx"  restante="$X.xx"/> 
        </div>
    )
}
