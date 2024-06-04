import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@material-ui/core';

function Agendamento() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const Agendamento = async () => {
    try {
      const response = await api.agendamento(selectedDate);
      console.log('Agendado com sucesso:', response);
      
    } catch (error) {
      console.error('falhar no agendamento:', error);
      
    }
  };

function Agendamento(){
  return (
    <div>
      <Date selected={selectedDate} onChange={handleDateChange} />
      <Button variant="contained" color="primary" onClick={Agendamento}>
        Agendamento
      </Button>
    </div>
  );
}}

export default Agendamento;