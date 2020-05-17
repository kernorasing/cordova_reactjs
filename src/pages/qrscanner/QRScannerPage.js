import React, { useEffect, useState, createRef } from 'react';
import QrReader from 'react-qr-reader';

export default function QRScannerPage() {
  const sourceTypes = { CAMERA: 'Camera', FILE: 'File' };
  const [qrcodeResult, setQRCodeResult] = useState('No result');
  const qrReaderEl = createRef();

  useEffect(() => {
  });

  const handleSelectSourceType = (type) => {
    if (type === sourceTypes.CAMERA) {
      initializeScanner();
    } else {
      qrReaderEl.current.openImageDialog();
    }
  };

  const handleScan = (data) => {
    if (data) {
      setQRCodeResult(data);
    }
  };

  const handleError = (err) => {
    alert('Unable to decode.');
  };

  return (
    <div className="position-relative" style={{ minHeight: 'calc(100vh - 42px)' }}>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">QR Scanner</span>
      </nav>

      <QrReader ref={qrReaderEl} delay={300} onError={handleError} onScan={handleScan} legacyMode style={{ width: '100%' }} />
      <p>{qrcodeResult}</p>

      <nav className="navbar navbar-light bg-light position-absolute w-100 p-0" style={{ bottom: 0 }}>
        {/* <span class="navbar-brand mb-0 h1">Select from Gallery</span> */}
        <div className="row w-100  m-0">
          <div className="col-6 border p-0">
            <button type="button" className="btn btn-info btn-block" style={{ borderRadius: 0 }} onClick={() => handleSelectSourceType(sourceTypes.CAMERA)}>
              Camera
            </button>
          </div>
          <div className="col-6 border p-0">
            <button type="button" className="btn btn-info btn-block" style={{ borderRadius: 0 }} onClick={() => handleSelectSourceType(sourceTypes.FILE)}>
              File
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
