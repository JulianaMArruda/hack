import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    Senha: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.loginUser(formData);
      console.log('Login efetuado com sucesso:', response);
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Login com falhar:', error);
      
    } };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
function Login(){
  return (
    <form onSubmit={handleSubmit}>
      {/* Input para email e senha */}
      <TextField 
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
      />
      {/* ... other input fields */}
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </form>
  );
}}

export default Login;