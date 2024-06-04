import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from './assets/components/Formulario.jsx';
import Login from './assets/components/Login.jsx';
import Agendamento from './assets/components/Agendamento.jsx';
import Painel from './assets/components/Painel.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/" element={<Login />} /> {/* Default to login */}
      </Routes>
    </Router>
  )
}

export default App;