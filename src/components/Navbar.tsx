import React from "react";
import logo from "../assets/logo.png"

export default function Navbar() {

    return (
        <nav>
            <img className="header--logo" src={logo} alt="logo" />
        </nav>
    );
}