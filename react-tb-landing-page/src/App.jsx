import "./App.css";
import "./components/navbar/Navbar";
import Navbar from "./components/navbar/Navbar";
import Headers from "./components/navbar/header/Header";
import Bootcam from "./components/navbar/bootcamps/bootcamps";
import { Containers, cs, ds, fs, dm, ux } from "./components/navbar/ciberseguridad/Ciber";


function App() {
  return <body className="body">
    <div>
    <Navbar/>
    <Headers/>
    <Bootcam/>
    <div className="containers-total">
    <Containers course ={cs} />
    </div>
    <div className="containers-total">
    <Containers course ={ds} />
    </div>
    <div className="containers-total">
    <Containers course ={fs} />
    </div>
    <div className="containers-total">
    <Containers course ={dm} />
    </div>
    <div className="containers-total">
    <Containers course ={ux} />
    </div>
<h1>Hola Mundo</h1>
    </div>
    </body>;
    
}

export default App;
