/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { isMobile, lineLogin } from './cordova-plugins';

function App() {
	const [profile, setProfile] = useState({});

	useEffect(() => {
		if (window.cordova) {
			console.log(lineLogin());
			if (isMobile()) {
				lineLogin().initialize({ channel_id: process.env.REACT_APP_LINE_CHANNEL_ID });
			}
		}
	});

	const loginWithLine = () =>
		lineLogin().login(
			(res) => {
				setProfile(res);
			},
			(err) => {
				alert(JSON.stringify(err));
			}
		);

	const getAccessToken = () => alert('getAccessToken');
	const refreshAccessToken = () => alert('refreshAccessToken');
	const verifyAccessToken = () => alert('verifyAccessToken');
	const logout = () => alert('logout');

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p style={{ wordBreak: 'break-word' }}>{window.cordova && device.platform}</p>
				<p>
					{process.env.REACT_APP_ENVIRONMENT_NAME} version {process.env.REACT_APP_BUILD_VERSION}
				</p>
				<p>{`${isMobile()}`}</p>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>

				<img src={profile.pictureURL} className="align-self-center mr-3" alt="" width="100%" />
				<h5 style={{ wordBreak: 'break-word' }}>{profile.userID}</h5>
				<p style={{ wordBreak: 'break-word' }}>{profile.displayName}</p>

				<div className="btn-group mt-3" role="group">
					<button type="button" className="btn btn-success" onClick={loginWithLine}>
						Login
					</button>
					<button type="button" className="btn btn-light" onClick={getAccessToken}>
						Get Access Token
					</button>
					<button type="button" className="btn btn-secondary" onClick={refreshAccessToken}>
						Refresh Access Token
					</button>
					<button type="button" className="btn btn-light" onClick={verifyAccessToken}>
						Verify Access Token
					</button>
					<button type="button" className="btn btn-secondary" onClick={logout}>
						Logout
					</button>
				</div>
			</header>
		</div>
	);
}

export default App;
