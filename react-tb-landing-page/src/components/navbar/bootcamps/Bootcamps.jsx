import "./bootcamps.css"
 const title = { titulo:"EXPERIENCIAS FORMATIVAS QUE CAMBIARÁN TU CARRERA",
   info:"Descubre nuestros Bootcamps"
 }
function Bootcam (){
    return <div className="botcamp">
       <p className="p">{title.titulo} </p>
       <div className="linea"></div> 
       <h1 className="h1-text">{title.info}</h1>
    </div>
}
export default Bootcam;