import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Display strikes={2} balls={3}/>
      <Dashboard strike={() => console.log('strike')}/>
    </div>
  );
}

export default App;
