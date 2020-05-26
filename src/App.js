/* eslint-disable no-undef */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const menuList = [
	{ path: '/geolocation', imageURL: 'https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png' },
	{ path: '/camera', imageURL: 'https://img.icons8.com/cotton/64/000000/compact-camera.png' },
	{ path: '/qrcode', imageURL: 'https://img.icons8.com/cotton/64/000000/barcode-scanner--v3.png' },
	{ path: '/fcm', imageURL: 'https://img.icons8.com/color/48/000000/firebase.png' },
	{ path: '/line', imageURL: 'https://img.icons8.com/color/48/000000/line-me.png' },
];

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
					{menuList.map((val, i) => (
						<Link to={val.path} className="col-4 mb-3" key={i}>
							<div className="card">
								<div className="card-body">
									<img src={val.imageURL} width={48} alt="" />
								</div>
							</div>
						</Link>
					))}
				</div>
			</header>
		</div>
	);
}

export default App;
