import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceFilter from './components/ServiceFilter';
import ServiceList from './components/ServiceList';
import './App.css';


function App() {
  return (
    <div className="App-header">
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
      
    </div>
  );
}

export default App;
