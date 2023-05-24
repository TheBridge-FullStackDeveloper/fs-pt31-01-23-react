import "./Navbar.css"


function Navbar() {
  return (
    <>
  <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="">cursos</a>
        </li>
        <li className="nav-item">
           <a href="">Donde estudiar</a> 
        </li>
        <li className="nav-item">
          <a href="">Financiacion y becas</a> 
        </li>
        <li>
        <a href="">Empresas e instrucciones</a>
        </li>
        <li>
        <a href="">Sobre nosotros</a>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;
