import React  from 'react';
import Homepages from '../pages/paginaprincipal';
import Login from '../pages/Login';
import Registros from '../pages/registrar';
import Detalles from '../pages/DetalleProducto';
import {
  Routes,
  Route
} from "react-router-dom"

function Publics() {
  return (   
      <Routes>         
        <Route path='/' element= {<Homepages />}/>
        <Route path='/ingresar' element={<Login />}/>       
        <Route path='/detalle/:id' element={<Detalles />}/>  
        <Route path='/alta' element= {<Registros />}/>
      </Routes> 
   
  );
}

export default Publics;
