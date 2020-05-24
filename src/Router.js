import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import GeolocationPage from './pages/GeolocationPage';
import CameraPage from './pages/CameraPage';
import QRScannerPage from './pages/QRScannerPage';
import FCMPage from './pages/FCMPage';

export default function AppRouter() {
  return (
    <Router>
      <Link to="/" style={{ position: 'absolute', top: '1rem', left: '1rem' }} className="btn btn-sm btn-light rounded-pill">
        <i class="fas fa-home"></i> Home
      </Link>
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
        <Route path="/qrcode">
          <QRScannerPage />
        </Route>
        <Route path="/fcm">
          <FCMPage />
        </Route>
      </Switch>
    </Router>
  );
}
