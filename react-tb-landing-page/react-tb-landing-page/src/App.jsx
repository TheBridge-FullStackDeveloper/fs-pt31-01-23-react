//import { useState } from 'react'
// import app from "./App.css"; otra forma de hacerlo
import './App.css'
import './components/Navbar';
import Navbar from './components/Navbar';     
import Header from './components/Header';


function App() {
  return (
  <body className="body">
  <div >
   <Navbar />
   <Header />
  </div>
  
  </body>
  );
}
export default App;
