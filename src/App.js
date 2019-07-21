import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World
    <button onClick={function () { alert("Msg saved") }}>Add</button ><br />
      <button onClick={function () { alert("Msg saved") }} > Sub</button>
    </div >
  );
}

export default App;
