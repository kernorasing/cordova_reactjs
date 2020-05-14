import React from 'react';

export default function QRScannerPage() {
  return (
    <div className="p-2" style={{ minHeight: 'calc(100vh - 42px)', backgroundColor: '#282c34' }}>
      <div className="d-flex justify-content-center align-item-center">
        <button className="btn btn-light mr-1" onClick={() => prepareQRScanner()}>
          QR Scanner
        </button>
        <button className="btn btn-light mr-1" onClick={() => showScanner()}>
          QR Show
        </button>
        <button className="btn btn-light" onClick={() => scanQRScanner()}>
          QR Scan
        </button>
      </div>
    </div>
  );
}

const prepareQRScanner = () => {
  //   if (!window.cordova || ['Android', 'iPhone'].every((s) => s !== device.platform)) {
  //     return;
  //   }
  //   QRScanner.prepare((err, status) => {
  //     if (err) {
  //       // here we can handle errors and clean up any loose ends.
  //       alert(JSON.stringify(err));
  //     }
  //     if (status.authorized) {
  //       // W00t, you have camera access and the scanner is initialized.
  //       QRscanner.show(); // should feel very fast.
  //     } else if (status.denied) {
  //       // The video preview will remain black, and scanning is disabled. We can
  //       // try to ask the user to change their mind, but we'll have to send them
  //       QRScanner.openSettings();
  //     } else {
  //       // we didn't get permission, but we didn't get permanently denied. (On
  //       // Android, a denial isn't permanent unless the user checks the "Don't
  //       // ask again" box.) We can ask again at the next relevant opportunity.
  //       alert(JSON.stringify(status));
  //     }
  //   });
};

const showScanner = () => {
  //   QRScanner.show();
};

const scanQRScanner = () => {
  //   QRScanner.scan((err, text) => {
  //     if (err) {
  //       alert(JSON.stringify(err));
  //       // an error occurred, or the scan was canceled (error code `6`)
  //     } else {
  //       // The scan completed, display the contents of the QR code:
  //       alert(text);
  //     }
  //   });
};
