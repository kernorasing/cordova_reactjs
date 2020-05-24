import React, { useState, createRef } from 'react';
import QrReader from 'react-qr-reader';

export default function QRScannerPage() {
  const sourceTypes = { CAMERA: 'Camera', GALLERY: 'Gallery' };
  const [qrcodeResult, setQRCodeResult] = useState('No result');
  const qrReaderEl = createRef();

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
    <div className="page-container">
      <QrReader ref={qrReaderEl} delay={300} onError={handleError} onScan={handleScan} legacyMode style={{ width: '100%' }} />
      <p>{qrcodeResult}</p>

      <div className="row w-100 m-0">
        <div className="col-6 px-1">
          <button className="btn btn-light btn-block rounded-0" onClick={() => handleSelectSourceType(sourceTypes.CAMERA)}>
            Camera
          </button>
        </div>
        <div className="col-6 px-1">
          <button className="btn btn-light btn-block rounded-0" onClick={() => handleSelectSourceType(sourceTypes.GALLERY)}>
            Gallery
          </button>
        </div>
      </div>
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
