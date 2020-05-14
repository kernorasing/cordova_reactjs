import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from '../App';
import GeolocationPage from '../pages/geolocation/GeolocationPage';
import CameraPage from '../pages/camera/CameraPage';
import QRScannerPage from '../pages/qrscanner/QRScannerPage';

export default function Layout() {
  return (
    <Router>
      <ul className="row text-center border m-0 p-0 fixed-bottom" style={{ listStyleType: 'none' }}>
        <li className="col p-2">
          <Link to="/" exact>Home</Link>
        </li>
        <li className="col p-2 border-left border-right">
          <Link to="/geolocation">Geolocation</Link>
        </li>
        <li className="col p-2 border-left border-right">
          <Link to="/camera">Camera</Link>
        </li>
        <li className="col p-2">
          <Link to="/qrscanner">QR Scanner</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/geolocation">
          <GeolocationPage />
        </Route>
        <Route path="/camera">
          <CameraPage />
        </Route>
        <Route path="/qrscanner">
          <QRScannerPage />
        </Route>
      </Switch>
    </Router>
  );
}
