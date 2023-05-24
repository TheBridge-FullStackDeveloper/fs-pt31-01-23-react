import "./bootcamps.css"

function Bootcamp (){
    return (
    <div>
        <h1 className="Bootcamp">Descubre nuestros bootcamp</h1>

        <div className = "ciberseguridad">
            <h2>Ciberseguridad</h2>
            <img src="https://uploads-ssl.webflow.com/60782404b8e195845053206a/60d0a6ee92195f77a8ac4bfe_CS.svg"></img>

            <div className="horarioCiber">
                <img className="imgCiber" src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg"></img>
                <p className="textCiber">480</p>
            </div>

            <div className="ubicacionCiber">
                <img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63bdeec8ef0ff6d3600d_Location.svg"></img>
                <p>Full time / Part time</p>
            </div>

            <p>Con nuestro bootcamp en ciberseguridad adquirirás los conocimientos necesarios para proteger los activos informáticos de una empresa y aprenderás a defenderla de posibles ataques en la red.</p>
        </div>;

        <div className="datascience">
            <h2>Data Science</h2>

        </div>;

        <div className="fullStack">
            <h2>DesarrolloWeb Full Stack</h2>

        </div>;
        
        <div class="marketing">
            <h2>Digital Marketing OPS</h2>

        </div>;

        <div className="desing">
            <h2>UX/UI Product Desing</h2>

        </div>
    </div>
        
    )
 
  }

  export default Bootcamp;