import "./App.css";
import "./components/navbar/Navbar";
import Navbar from "./components/navbar/Navbar";
import Headers from "./components/navbar/header/Header";
import Bootcam from "./components/navbar/bootcamps/bootcamps";
import { Containers, cs, ds, fs, dm, ux } from "./components/navbar/ciberseguridad/Ciber";

//e intentado meter font-family: 'Mulish', sans-serif; para todo el texto y no lo e conseguido meti el link tambien en index.html pero nada 
function App() {
  const courses = [cs, ds, fs, dm, ux]
  return <body className="body">
    <div >
      <Navbar />
      <Headers />
      <Bootcam />
      <div className="card-container">
        {
          courses.map((course, idx) =>
            <div key={idx} className="containers-total">
              <Containers course={course} />
            </div>
          )
        }
      </div>
    
    </div>
  </body>;

}

export default App;
