//import { useState } from 'react'
// import app from "./App.css"; otra forma de hacerlo
import './App.css'
import './components/Navbar';
import Navbar from './components/Navbar';     
import Header from './components/Header';
import Bootcamps from './components/Bootcamps';


function App() {
  return (
  <body className="body">
  <div className="container">
   <Navbar />
   <Header />
   <Bootcamps />
   
  </div>
  
  </body>
  );
}
export default App;
