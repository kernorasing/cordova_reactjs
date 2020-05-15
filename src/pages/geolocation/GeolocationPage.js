import React from 'react';

export default function GeolocationPage() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: 'calc(100vh - 43px)', backgroundColor: '#282c34' }}
    >
      <div>
        <span id="location" className="text-light d-none"></span>
        <div id="location-spinner" className="spinner-border text-light d-none" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div>
        <button className="btn btn-light" onClick={() => getCurrentPosition()}>
          Get Current Position
        </button>
      </div>
    </div>
  );
}

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
