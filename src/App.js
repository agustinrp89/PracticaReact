import React from 'react';
import './App.css';
import {
  BrowserRouter as Router  
  
} from "react-router-dom"
import Menu from './components/menu';
import Publics from './rutas/publics';
import Container from "react-bootstrap/Container"
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Menu />
        <Container>
        <Publics />
        </Container>
      </AuthProvider>
    </Router>
);
  
   
 
}

export default App;
