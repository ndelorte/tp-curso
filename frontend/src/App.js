import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Copa from './pages/Copa';
import Ensenanza from './pages/Ensenanza';
import Galeria from './pages/Galeria';
import Interclubes from './pages/Interclubes';



function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="copa" element={<Copa />} />
          <Route path="ensenanza" element={<Ensenanza />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="interclubes" element={<Interclubes />} />
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
