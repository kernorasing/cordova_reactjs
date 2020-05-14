/* eslint-disable no-undef */
import React from 'react';
// import logo from "./logo.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <img
          src="https://icons.iconarchive.com/icons/goescat/macaron/512/stellarium-icon.png"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <p style={marginTop1} id="location"></p>
        <button className="btn btn-light" style={marginTop1} onClick={() => getCurrentPosition()}>
          Get Current Position
        </button>

        <div className={!navigator.camera && 'invisible'}>
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
      </header>
    </div>
  );
}

const marginTop1 = { marginTop: '1rem' };

const getCurrentPosition = () => {
  const locationEl = document.getElementById('location');
  locationEl.innerHTML = 'Getting position...';

  navigator.geolocation.getCurrentPosition((position) => {
    locationEl.innerHTML = 'latitude : ' + position.coords.latitude + ', longitude : ' + position.coords.longitude;
  });
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

export default App;
