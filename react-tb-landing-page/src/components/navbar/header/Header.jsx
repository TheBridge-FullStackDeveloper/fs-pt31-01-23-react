const header = {
    title: "Acelera tu carrera digital.",
    subheading: "En una época de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.",
    paragraph: "Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia una de las profesiones del futuro más demandadas en el presente, ya sea Ciberseguridad, Data Science, Desarrollo de Software, Diseño de Producto UX/UI o Marketing Digital.",
    button :"PIDE INFORMACIÓN",
    img: "https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60e4408a7bd856103b6000f5_DSC03804%20(2).jpg",
    
  }
//no e conseguido meter el punto rojo dentro de la etiqueta (<div className="square-element"></div>)

import "./Header.css";
function Headers (){
    return <div className="content_principal">
      <div className="container-text">
         <h1 className="h1">{header.title}<div className="square-element"></div></h1> 
         <p className="p">{header.subheading}</p>
         <p className="p-texto">{header.paragraph} </p>
         <button className="button">{header.button} </button>
      </div>
          <div className="container" ><img className="imgf" src ={header.img} ></img></div>
     </div>
     
}

export default Headers;