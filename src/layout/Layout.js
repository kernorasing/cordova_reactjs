import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from '../App';
import GeolocationPage from '../pages/geolocation/GeolocationPage';
import CameraPage from '../pages/camera/CameraPage';
import QRScannerPage from '../pages/qrscanner/QRScannerPage';

export default function Layout() {
	return (
		<Router>
			<div className="w-100 position-absolute" style={{ bottom: 0 }}>
				<nav className="navbar navbar-light bg-light p-0">
					<ul className="row text-center border m-0 p-0 w-100" style={{ listStyleType: 'none' }}>
						<li className="col p-2">
							<Link to="/">Home</Link>
						</li>
						<li className="col p-2 border-left border-right">
							<Link to="/geolocation">GPS</Link>
						</li>
						<li className="col p-2 border-left border-right">
							<Link to="/camera">Camera</Link>
						</li>
						<li className="col p-2">
							<Link to="/qrscanner">QR Code</Link>
						</li>
					</ul>
				</nav>
			</div>

			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/geolocation" component={GeolocationPage} />
				<Route path="/camera" component={CameraPage} />
				<Route path="/qrscanner" component={QRScannerPage} />
			</Switch>
		</Router>
	);
}
