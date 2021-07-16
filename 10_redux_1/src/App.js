import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import './App.css';


function App() {
  return (
    <div className="App-header">
      <ServiceAdd />
      <ServiceList />
      
    </div>
  );
}

export default App;
