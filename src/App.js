import React from 'react';
// import logo from "./logo.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://icons.iconarchive.com/icons/goescat/macaron/512/stellarium-icon.png"
          className="App-logo"
          alt="logo"
        />
        <p id="location"></p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <button
          style={{ marginTop: '1rem' }}
          onClick={() => {
            const locationEl = document.getElementById('location');
            locationEl.innerHTML = 'Getting position ...';

            navigator.geolocation.getCurrentPosition((position) => {
              locationEl.innerHTML =
                'latitude : ' + position.coords.latitude + ', longitude : ' + position.coords.longitude;
            });
          }}
        >
          Get Current Position
        </button>
      </header>
    </div>
  );
}

export default App;
