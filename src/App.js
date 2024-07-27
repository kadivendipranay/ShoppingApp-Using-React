import Navbar from "./Components/Navbar"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  return (
    <div>
      <Navbar data={setLoggedIn} initial={isLoggedIn} />
    </div>
  );
}

export default App;
