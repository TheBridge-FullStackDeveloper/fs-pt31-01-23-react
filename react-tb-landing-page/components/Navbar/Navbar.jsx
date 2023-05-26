import "./Navbar.css";

function Navbar({ links }) {
  return (
    <div className="tb">
  <ul className="nav"> 
    {links.map((link, index) => (
    <li key={index}>{link}</li>
  ))}
  </ul>
  </div>
  );
}

export default Navbar;
