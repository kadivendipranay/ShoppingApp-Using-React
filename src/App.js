import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar data={setLoggedIn} initial={isLoggedIn} />
      <header className="App-header">
        <h1>Welcome to React with Bootstrap</h1>
        <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          Hover me to see tooltip
        </button>
      </header>
    </div>
  );
}

export default App;
