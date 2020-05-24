/* eslint-disable no-undef */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mb-3">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {process.env.REACT_APP_ENVIRONMENT_NAME} version {process.env.REACT_APP_BUILD_VERSION}
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </div>
        <div className="row justify-content-center w-100">
          <Link to="/geolocation" className="col-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" width={48} />
              </div>
            </div>
          </Link>
          <Link to="/camera" className="col-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src="https://img.icons8.com/cotton/64/000000/compact-camera.png" width={48} />
              </div>
            </div>
          </Link>
          <Link to="qrcode" className="col-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src="https://img.icons8.com/cotton/64/000000/barcode-scanner--v3.png" width={48} />
              </div>
            </div>
          </Link>
          <Link to="fcm" className="col-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src="https://img.icons8.com/color/48/000000/firebase.png" width={48} />
              </div>
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
