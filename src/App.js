/* eslint-disable no-undef */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import GeolocationPage from './pages/geolocation/GeolocationPage';
import CameraPage from './pages/camera/CameraPage';
import QRScannerPage from './pages/qrscanner/QRScannerPage';

function App() {
  const pages = [
    { title: 'Home', path: '/' },
    { title: 'Location', path: '/geolocation' },
    { title: 'Camera', path: '/camera' },
    { title: 'QR Code', path: '/qrscanner' },
  ];

  const AppContent = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ wordBreak: 'break-word' }}>{window.cordova && device.platform}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  };

  return (
    <Router>
      <Layout pages={pages} />
      <Switch>
        <Route exact path="/" component={AppContent} />
        <Route path="/geolocation" component={GeolocationPage} />
        <Route path="/camera" component={CameraPage} />
        <Route path="/qrscanner" component={QRScannerPage} />
      </Switch>
    </Router>
  );
}

export default App;
