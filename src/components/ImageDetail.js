import React from "react";

function ImageDetail({ image, onClose }) {
  return (
    <div className="image-popup">
      <div className="image-popup-content">
        <img src={image.download_url} alt={image.author} />
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ImageDetail;
