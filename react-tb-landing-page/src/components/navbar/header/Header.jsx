const header = {
    title: "Acelera tu carrera digital",
    subheading: "En una época de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.",
    paragraph: "Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia una de las profesiones del futuro más demandadas en el presente, ya sea Ciberseguridad, Data Science, Desarrollo de Software, Diseño de Producto UX/UI o Marketing Digital.",
    button :"pide información"
  }
import "./Header.css";
function Headers (){
    return <div className="content_principal">
      <div className="container-text">
         <h1 className="h1">Acelera tu<br></br> carrera<br></br> digital.</h1>
         <p><b> En una época de cambios y desarrollo<br></br> tecnológico, tu formación no puede<br></br> perder el ritmo.</b></p>
         <p>Cuando eliges un bootcamp en The Bridge estás<br></br> dando el paso definitivo hacia una de las profesiones<br></br> del futuro más demandadas en el presente, ya sea<br></br> Ciberseguridad, Data Science, Desarrollo de Software,<br></br> Diseño de Producto UX/UI o Marketing Digital.</p>
         <button className="button">PIDE INFORMACIÓN</button>
      </div>
          <div className="container" ><img className="imgf" src = "https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60e4408a7bd856103b6000f5_DSC03804%20(2).jpg"></img></div>
     </div>
     
}

export default Headers;