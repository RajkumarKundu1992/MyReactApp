import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World---By Rajkumar<br /><br />
      <button >Add</button ><br />
      <label id="num">press (+ or -)</label><br />
      <button onClick={function () { alert("Msg saved") }} > Sub</button><br /><br />
      <input id="txt" type="text" name="text" placeholder="enter text" onChange={reverseInput} />

      <label id="lbl"> hi</label>
    </div >

  );
}

function handleClick() {
  alert("msg saved")
}


function reverseInput(r) {
  var a = document.getElementById("txt").value;
  // document.getElementById("lbl").textContent = a.split('').reverse().join('');
  var o = '';
  for (var i = a.length - 1; i >= 0; i--)
    o += a[i];

  document.getElementById("lbl").textContent = o;
}



export default App;
