import './App.css'
import React from "react";
import Form from './components/form';
import Result from './components/result';

function App(){
  return(
    <div className="App">
      <h1>
        Simple Calculator using React Redux
      </h1>
      <Form/>
      <Result/>
    </div>
  )
}

export default App;