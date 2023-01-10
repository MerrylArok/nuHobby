import { useState } from "react";
import starPicture from "../assets/star.png"

export default function Card(props) {
console.log(props)
    return (
        <div className="card">
            <img className="card--image" src={props.img} alt={props.alt} />
            <div className="card--rating">
                <img className="card--star" src={starPicture} alt="star" />
                <span className="greyedOut">{props.rating}</span>
                <span className="greyedOut">{"(" + props.votes + ")"}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="boldText">{props.members}</span> hobbyists</p>
        </div>
    )
}