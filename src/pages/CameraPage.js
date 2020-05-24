import React from 'react';

export default function CameraPage() {
  return (
    <div className="page-container">
      <div className="text-center">
        <img
          id="image"
          src="https://cdn.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
          style={{ textAlign: 'center', maxWidth: '75%' }}
          alt="image_upload"
        />
      </div>
      <div className="row w-100 m-0">
        <div className="col-6 px-1">
          <button className="btn btn-light btn-block rounded-0" onClick={() => getImage(window.Camera.PictureSourceType.CAMERA)}>
            Camera
          </button>
        </div>
        <div className="col-6 px-1">
          <button className="btn btn-light btn-block rounded-0" onClick={() => getImage(window.Camera.PictureSourceType.PHOTOLIBRARY)}>
            Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

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

const isMobile = () => {
  return !window.cordova || ['Android', 'iPhone'].every((s) => s !== window.device.platform);
};
