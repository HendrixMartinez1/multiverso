import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Menu from './Componentes/Menu';

import Inicio from './Paginas/Inicio';
import EstrellasyAgujeros from './Paginas/EstrellasyAgujeros';
import LaEvolucion from './Paginas/LaEvolucion';
import Magnetares from './Paginas/Magnetares';
import Exoplanetas from './Paginas/Exoplanetas';
import Pulsares from './Paginas/Pulsares';
import Contacto from './Paginas/Contacto';

function App() {
    return (
        <>
     <Router>
    <Menu/>
        <div className="container pt-5 mt-5">
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Estrellas" element={<EstrellasyAgujeros/>}/>
            <Route path="/Evolucion" element={<LaEvolucion/>}/>
            <Route path="/Magnetares" element={<Magnetares/>}/>
            <Route path="/Exoplanetas" element={<Exoplanetas/>}/>
            <Route path="/Pulsares" element={<Pulsares/>}/>
            <Route path="/Contacto"element={<Contacto/>}/>
        </Routes>
     </div>
     </Router>
     </>
     );
 }
 export default App;

 
            

 
    
    



      
        




      
     
      



