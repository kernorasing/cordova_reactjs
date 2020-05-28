import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import GeolocationPage from './pages/GeolocationPage';
import CameraPage from './pages/CameraPage';
import QRScannerPage from './pages/QRScannerPage';
import FCMPage from './pages/FCMPage';
import LineLoginPage from './pages/LineLoginPage';
import PlaygroundPage from './pages/PlaygroundPage';

export const routes = [
	{ component: <GeolocationPage />, path: '/geolocation', imageURL: 'https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png' },
	{ component: <CameraPage />, path: '/camera', imageURL: 'https://img.icons8.com/cotton/64/000000/compact-camera.png' },
	{ component: <QRScannerPage />, path: '/qrcode', imageURL: 'https://img.icons8.com/cotton/64/000000/barcode-scanner--v3.png' },
	{ component: <FCMPage />, path: '/fcm', imageURL: 'https://img.icons8.com/color/48/000000/firebase.png' },
	{ component: <LineLoginPage />, path: '/line', imageURL: 'https://img.icons8.com/color/48/000000/line-me.png' },
	{ component: <PlaygroundPage />, path: '/playground', imageURL: 'https://img.icons8.com/dusk/64/000000/football.png' }
];

export default function AppRouter() {
  return (
    <Router>
      <Link to="/" style={{ position: 'absolute', top: '1rem', left: '1rem' }} className="btn btn-sm btn-light rounded-pill">
        <i className="fas fa-home"></i> 
      </Link>
      <Switch>
        <Route exact path="/" >
          <App menu={routes} />
        </Route>
        {routes.map((val, i) => (
          <Route key={i} path={val.path}>
            {val.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
