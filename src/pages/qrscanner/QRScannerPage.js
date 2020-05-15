import React, { useEffect } from 'react';

export default function QRScannerPage() {
	useEffect(() => {
		initializeScanner();
	});

	return (
		<div className="position-relative" style={{ minHeight: 'calc(100vh - 42px)' }}>
			<nav className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">QR Scanner</span>
			</nav>

			<nav className="navbar navbar-light bg-light position-absolute w-100 p-0" style={{ bottom: 0 }}>
				{/* <span class="navbar-brand mb-0 h1">Select from Gallery</span> */}
				<div className="row w-100  m-0">
					<div className="col-6 border p-0">
						<button type="button" className="btn btn-info btn-block" style={{ borderRadius: 0 }}>
							Photo Library
						</button>
					</div>
					<div className="col-6 border p-0">
						<button type="button" className="btn btn-info btn-block" style={{ borderRadius: 0 }}>
							My QR Code
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

const initializeScanner = () => {
	if (!window.cordova || ['Android', 'iPhone'].every((s) => s !== window.device.platform)) {
		return;
	}
	window.cordova.plugins.barcodeScanner.scan(
		(result) => {
			alert(JSON.stringify(result));
		},
		(error) => {
			alert('Scanning failed: ' + error);
		}
	);
};
