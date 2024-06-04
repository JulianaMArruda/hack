import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function RegistrationForm() {
  const [formData, setFormData] = useState({
    Nome: '',
    Sobrenome,
    email: '',
    Senha: '',
    
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.registerUser(formData); // API call
      console.log('Registrado com sucesso:', response);
      navigate('/login');
    } catch (error) {
      console.error('Registror com erro:', error);
      
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input para nome, email, senha, etc. */}
      <TextField 
        label=" Nome"
        name="Sobrenome"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
      />
      {/* ... other input fields */}
      <Button type="submit" variant="contained" color="primary">Registro</Button>
    </form>
  );
}

export default RegistrationForm;