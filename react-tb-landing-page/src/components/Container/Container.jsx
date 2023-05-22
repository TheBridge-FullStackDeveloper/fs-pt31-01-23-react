import "./Container.css"


function Container(){

    return(<>

      <div className="container back-opacity">
        <section className="cont-left">
            
            <h1 className="square-element acelera">Acelera tu carrera digital</h1>            
            <p className="text1"><strong>En una época de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.</strong></p>
            <p className="text2">Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia una de las profesiones del futuro más demandadas en el presente, ya sea Ciberseguridad, Data Science, Desarrollo de Software, Diseño de Producto UX/UI o Marketing Digital</p>

            <button className="pideInfo">
                <strong>PIDE INFORMACIÓN</strong>
            </button>

            

        </section>
        
        <section className="cont-right">
            <img src="././src/assets/imgs/students_copy.png"/>
        </section>


      </div>


      <div className="divisor"></div>
    </>)
  
  }

  export default Container