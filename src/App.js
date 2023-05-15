import React from 'react';
import './App.css';

function App() {
  const handleHeadersRequest = () => {
    fetch('/headers')
      .then(response => response.text())
      .then(data => alert(data))
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <h1>Web Server Example</h1>
      <button onClick={handleHeadersRequest}>Get Headers</button>
    </div>
  );
}

export default App;
