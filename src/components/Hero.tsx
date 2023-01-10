import { useState } from "react";
import heroImage from "../assets/photo-grid.png";

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--image" src={heroImage} alt="herImage.jpg" />
            <hgroup className="hero--hgroup">
                <h1>Explore Something New</h1>
                <p>Browse some of the most exciting hobbies people are talking about and join our online communities.</p>
            </hgroup>

        </section>
    )

}