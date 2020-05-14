/* eslint-disable no-undef */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ wordBreak: 'break-word' }}>{window.cordova && device.platform}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <div className="my-3">
          <p style={marginTop1} id="location" className="d-none"></p>
          <div>
            <div id="location-spinner" className="spinner-border text-light d-none" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div>
            <button className="btn btn-light" style={marginTop1} onClick={() => getCurrentPosition()}>
              Get Current Position
            </button>
          </div>
        </div>

        <div className={'mb-3' + ((!window.cordova || ['Android', 'iPhone'].every(s => s !== device.platform)) && ' d-none')}>
          <div>
            <img
              id="image"
              src="https://cdn.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
              style={{ marginTop: '1rem', textAlign: 'center', maxWidth: '75%' }}
              alt="image_upload"
            />
          </div>
          <div className="row">
            <div className="col-6">
              <button
                className="btn btn-block btn-light mr-1"
                style={marginTop1}
                onClick={() => getImage(Camera.PictureSourceType.CAMERA)}
              >
                Camera
              </button>
            </div>
            <div className="col-6">
              <button
                className="btn btn-block btn-light"
                style={marginTop1}
                onClick={() => getImage(Camera.PictureSourceType.PHOTOLIBRARY)}
              >
                Photo Library
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12" style={{ wordBreak: 'break-word' }}>
            <p id="qrscanner"></p>
          </div>
          <div className="col-12">
            <button className="btn btn-light" onClick={() => prepareQRScanner()}>
              QR Code
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

const marginTop1 = { marginTop: '1rem' };

const getCurrentPosition = () => {
  const locationEl = document.getElementById('location');
  locationEl.innerHTML = '';

  const locationSpinnerEl = document.getElementById('location-spinner');
  locationSpinnerEl.className = locationSpinnerEl.className.replace('d-none', 'd-inline-block').trim();

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      locationEl.innerHTML = 'latitude : ' + pos.coords.latitude + ', <br> longitude : ' + pos.coords.longitude;
      locationEl.className = locationEl.className.replace('d-none', '').trim();
      locationSpinnerEl.className = locationSpinnerEl.className.replace('d-inline-block', 'd-none').trim();
    },
    (err) => {
      locationEl.innerHTML = err.message;
      locationEl.className = locationEl.className.replace('d-none', '').trim();
      locationSpinnerEl.className = locationSpinnerEl.className.replace('d-inline-block', 'd-none').trim();
    },
    {
      timeout: 5000,
    }
  );
};

const getImage = (sourceType) => {
  const image = document.getElementById('image');

  navigator.camera.getPicture(
    (imgData) => {
      image.src = imgData;
    },
    (err) => {},
    { sourceType: sourceType }
  );
};

const prepareQRScanner = () => {
  console.log({ QRScanner });
  QRScanner.prepare((err, status) => {
    const qrscannerEl = document.getElementById('qrscanner');
    if (err) {
      qrscannerEl.innerHTML = JSON.stringify(err);
    }
    qrscannerEl.innerHTML = JSON.stringify({ QRScanner });
    // if (status.authorized) {
    //   QRscanner.show();
    // } else if (status.denied) {
    //   QRScanner.openSettings();
    // } else {
    //   qrscannerEl.innerHTML = JSON.stringify(status);
    // }

    console.log(`prepareQRScanner -> status`, status);
    console.log(`prepareQRScanner -> err`, err);
  });
};

export default App;
