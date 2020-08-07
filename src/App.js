import React from 'react';
import './App.css';
import Toggler from './components/Toggler'
import SimpleFormInput from './components/SimpleFormInput';
import Clicker from './components/Clicker'

function App() {
  return (
    <div className="App">
      <Clicker />
      <Toggler />
      <SimpleFormInput />
    </div>
  );
}

export default App;
