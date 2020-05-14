import React from 'react';

export default function CameraPage() {
  return (
    <div className="" style={{ minHeight: 'calc(100vh - 42px)', backgroundColor: '#282c34' }}>
      <div className="text-center">
        <img
          id="image"
          src="https://cdn.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
          style={{ textAlign: 'center', maxWidth: '75%' }}
          alt="image_upload"
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-light mr-1"
          onClick={() => {} /* getImage(Camera.PictureSourceType.CAMERA) */}
        >
          Camera
        </button>
        <button
          className="btn btn-light"
          onClick={() => {} /* getImage(Camera.PictureSourceType.PHOTOLIBRARY) */}
        >
          Gallery
        </button>
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
  return false; // !window.cordova || ['Android', 'iPhone'].every((s) => s !== device.platform);
};
