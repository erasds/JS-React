import React from 'react';
import './App.css';
import Form from './components/Form';

const  App = () => {

  return (
    <div className="App">
      <div className="App-content">
        <p>
          <u>LISTA DE TAREAS</u>
        </p>
        <Form />
      </div>
    </div>
  );
}

export default App;
