import React from 'react';
import './App.css';
import Toggler from './components/Toggler'
// import SimpleForm from './components/SimpleForm'
import SimpleFormInput from './components/SimpleFormInput';

function App() {
  return (
    <div className="App">
      <Toggler />
      {/* <SimpleForm /> */}
      <SimpleFormInput />
    </div>
  );
}

export default App;
