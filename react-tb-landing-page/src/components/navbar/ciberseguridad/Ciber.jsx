import "./Ciber.css";

export const cs = {
  title: "Ciberseguridad",
  img: "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg",
  hours: "480",
  format: "Presencial/Remoto",
  description: "Con nuestro bootcamp adquirirás los conocimientos para ser miembro de un equipo Red Team o Blue Team utilizando las estrategias y herramientas más actuales, en uno de los mejores programas del mundo en 2021.",
  svg: "https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"

}
export const ds = {
  title: "Data Science",
  img: "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649ad574f4fc2cffa3f94_DS.svg",
  hours: "480",
  format: "Presencial/Remoto",
  description: "Aprenderás Python, sus librerías de análisis de datos y de Machine Learning y Deep para construir y desplegar modelos y mostrar su utilidad al negocio."
}
export const fs = {
  "title": "Desarrollo Web Full Stack",
  "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a64a28aaa7f58060aa5dcb_FS.svg",
  "hours": "480",
  "format": "Presencial/Remoto",
  "description": "Con nuestro bootcamp te transformarás en un desarrollador Web Full Stack. Aprende desde cero HTML, JavaScript node.JS y bases de datos. Acelera tus proyectos utilizando ReactJS, y conoce los fundamentos de DevOps para el despliegue y mantenimiento de tus proyectos."
}
export const dm = {
  "title": "Digital Marketing OPS",
  "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6af5f8903204be404b0_DM.svg",
  "hours": "480",
  "format": "Presencial/Remoto",
  "description": "Una aproximación práctica al Marketing Digital que te permitirá conocer las ultimas herramientas y los nuevos medios, con foco en la planificación, análisis y automatización para la optimización de resultados. * Becas L'Oréal Digital Marketing Ops"
}
export const ux = {
  "title": "UX/UI Product Design",
  "img": "https://uploads-ssl.webflow.com/60782404b8e195845053206a/60a649f7b1cdbc9d2f9b93be_PD.png",
  "hours": "480",
  "format": "Presencial/Remoto",
  "description": "Te familiarizarás con conceptos clave sobre experiencia de usuario: metodologías de investigación y análisis de datos, arquitectura de la información, ideación y principios del diseño visual y de experiencia de usuario. * Becas Opinno Digital Experience"
}



export function Containers({ course }) {
  return <div  >
    <img className="card-image"
      src={course.img}
    ></img>
    <h3 className="h3-card">{course.title}</h3>
    <button className="button-card" >{course.hours}</button>
    <button className="location-card">{course.format}</button>
    <p className="p-card">{course.description}</p>
    <p className="info">+ INFO</p>
  </div>

}

