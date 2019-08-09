import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard'

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  return (
    <div className="App">
      <Display strikes={strikes} balls={balls}/>
      <Dashboard />
    </div>
  );
}

export default App;
