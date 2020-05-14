import React from 'react';

export default function QRScannerPage() {
  return (
    <div className="p-2 text-center" style={{ minHeight: 'calc(100vh - 42px)' }}>
      <button className="btn btn-light" onClick={() => prepareQRScanner()}>
        Scan
      </button>
    </div>
  );
}

const prepareQRScanner = () => {
  if (!window.cordova || ['Android', 'iPhone'].every((s) => s !== window.device.platform)) {
    return;
  }
  window.QRScanner.prepare((err, status) => {
    if (err) {
      // here we can handle errors and clean up any loose ends.
      alert('err on prepare : ' + JSON.stringify(err));
    }
    if (status.authorized) {
      // W00t, you have camera access and the scanner is initialized.
      showScanner(); // should feel very fast.
    } else if (status.denied) {
      // The video preview will remain black, and scanning is disabled. We can
      // try to ask the user to change their mind, but we'll have to send them
      window.QRScanner.openSettings();
    } else {
      // we didn't get permission, but we didn't get permanently denied. (On
      // Android, a denial isn't permanent unless the user checks the "Don't
      // ask again" box.) We can ask again at the next relevant opportunity.
      alert('out of case : ' + JSON.stringify(status));
    }
  });
};

const showScanner = () => {
  const bodyEl = document.getElementsByTagName('body')[0];
  bodyEl.style.backgroundColor = 'transparent';
  window.QRScanner.show();
  scanQRScanner();
};

const scanQRScanner = () => {
  window.QRScanner.scan((err, text) => {
    if (err) {
      alert('err on scan : ' + JSON.stringify(err));
      // an error occurred, or the scan was canceled (error code `6`)
    } else {
      // The scan completed, display the contents of the QR code:
      alert('text on scan' + text);
    }

    setTimeout(() => {
      scanQRScanner();
    }, 1000);
  });
};
