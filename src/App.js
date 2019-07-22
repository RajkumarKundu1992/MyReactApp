import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World---By Rajkumar<br /><br />
      <button onClick={inc}>Add</button ><br />
      <label id="num">press (+ or -)</label><br />
      <button onClick={dec} > Sub</button><br /><br />
      <input id="txt" type="text" name="text" placeholder="enter text" onChange={reverseInput} />

      <label id="lbl"> Reverse String will display here</label>
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
var n = 0;

function inc() {
  document.getElementById("num").textContent = n++;
}
function dec() {

  document.getElementById("num").textContent = --n;
}

export default App;
