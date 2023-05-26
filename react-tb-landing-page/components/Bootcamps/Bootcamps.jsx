import "./Bootcamps.css";


const cs = {
    "title": "Ciberseguridad",
    "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg",
    "hours": "480",
    "format": "Presencial/Remoto",
    "description": "Con nuestro bootcamp adquirirás los conocimientos para ser miembro de un equipo Red Team o Blue Team utilizando las estrategias y herramientas más actuales, en uno de los mejores programas del mundo en 2021."
}

const ds = {
    "title": "Data Science",
    "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649ad574f4fc2cffa3f94_DS.svg",
    "hours": "480",
    "format": "Presencial/Remoto",
    "description": "Aprenderás Python, sus librerías de análisis de datos y de Machine Learning y Deep para construir y desplegar modelos y mostrar su utilidad al negocio."
}

const fs = {
    "title": "Desarrollo Web Full Stack",
    "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a64a28aaa7f58060aa5dcb_FS.svg",
    "hours": "480",
    "format": "Presencial/Remoto",
    "description": "Con nuestro bootcamp te transformarás en un desarrollador Web Full Stack. Aprende desde cero HTML, JavaScript node.JS y bases de datos. Acelera tus proyectos utilizando ReactJS, y conoce los fundamentos de DevOps para el despliegue y mantenimiento de tus proyectos."
}

const dm = {
    "title": "Digital Marketing OPS",
    "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6af5f8903204be404b0_DM.svg",
    "hours": "480",
    "format": "Presencial/Remoto",
    "description": "Una aproximación práctica al Marketing Digital que te permitirá conocer las ultimas herramientas y los nuevos medios, con foco en la planificación, análisis y automatización para la optimización de resultados. * Becas L'Oréal Digital Marketing Ops"
}

const ux = {
    "title": "UX/UI Product Design",
    "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649f7b1cdbc9d2f9b93be_PD.png",
    "hours": "480",
    "format": "Presencial/Remoto",
    "description": "Te familiarizarás con conceptos clave sobre experiencia de usuario: metodologías de investigación y análisis de datos, arquitectura de la información, ideación y principios del diseño visual y de experiencia de usuario. * Becas Opinno Digital Experience"
}

const bootcamps = [cs, ds, fs, dm, ux]

function Bootcamps() {
    return (
        <div >
            <p className="title">EXPERIENCIAS FORMATIVAS QUE CAMBIARÁN TU CARRERA</p>
            <p className="header">Descubre nuestros <br /> Bootcamps</p>
            <div className="contenedor">
                {bootcamps.map((bootcamp, index) => (
                    <div className="course" key={index}>
                        <img className="img2" src={bootcamp.img} /> <br />
                        <h2 className="title2">{bootcamp.title}</h2> <br />
                        <button className="hours">{bootcamp.hours}</button>
                        <button className="format">{bootcamp.format}</button> <br />
                        <div className="description">{bootcamp.description}</div> <br />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Bootcamps;