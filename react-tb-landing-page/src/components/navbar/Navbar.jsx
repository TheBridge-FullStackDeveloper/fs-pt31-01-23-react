import "./Nav.css"
const links = ["Cursos", "Donde estudiar", "Financiacion y becas",
    "Empresas e instruccioines", "Sobre nosotros"]
function Navbar() {
    return (<nav className="navbar">
        <img className="img" src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/607eeb4b0517b6659206c10f_thebridgelogo.svg" alt=""></img>
        <ul className="ul" >
            {links.map((link, index) => (
                <li className="li" key={index}>{link}</li>
            ))}
        </ul>
    </nav>

    )
}

export default Navbar;