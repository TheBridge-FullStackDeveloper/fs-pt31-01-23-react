import "./Navbar.css"

function Navbar( { links } ){
    return (
        <>        
          <ul className="navbar">
            <li> <img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/607eeb4b0517b6659206c10f_thebridgelogo.svg" className="imgLogo"></img> </li>
            { links.map( (link,index) =>(
              <li key={index}> {link} </li>
            ))}
          </ul>
        </>
    );
  }

  export default Navbar