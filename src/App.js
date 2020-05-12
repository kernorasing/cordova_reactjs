/* eslint-disable no-undef */
import React from 'react';
// import logo from "./logo.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <button style={marginTop1} onClick={() => getCurrentPosition()}>
          Get Current Position
        </button>

        <img id="image" src="" style={{ marginTop: '1rem', textAlign: 'center' }} width="100%" alt="image_upload" />
        <button style={marginTop1} onClick={() => getImage(Camera.PictureSourceType.CAMERA)}>
          Camera
        </button>
        <button style={marginTop1} onClick={() => getImage(Camera.PictureSourceType.PHOTOLIBRARY)}>
          Photo Library
        </button>
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
