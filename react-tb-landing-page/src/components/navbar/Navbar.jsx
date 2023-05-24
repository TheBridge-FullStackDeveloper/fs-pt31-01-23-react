import React from "react";
import "./navbar.css"

const Navbar =({img, links})=>{
    return(
        <nav className="navbar">
            <img src={img} alt="logo" className="logo"/>
            <ul className="listalink">
                {links.map((link, index)=>(
                    <li key={index} className="links">{link}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar