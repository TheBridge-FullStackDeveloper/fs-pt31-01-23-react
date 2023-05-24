import "./Header.css";

const headerData = {
    title: "Acelera tu carrera digital",
    subheading: "En una época de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.",
    paragraph: "Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia una de las profesiones del futuro más demandadas en el presente, ya sea Ciberseguridad, Data Science, Desarrollo de Software, Diseño de Producto UX/UI o Marketing Digital.",
    button: "pide información"
};

function Header() {
    return(
        <header className="header">
            <h1 className="title">
                {headerData.title.split('.').map((part, index) => (
                    index === 0 ? (
                        <span key={index}>
                            {part}.
                        </span>
                    ) : (
                        part
                    )
                    ))}
                    </h1>

            <h2 className="subheading">{headerData.subheading}</h2>
            <p className="paragraph">{headerData.paragraph}</p>
            <button className="info-button">{headerData.button}</button>
        </header>
    );    
}

export default Header;