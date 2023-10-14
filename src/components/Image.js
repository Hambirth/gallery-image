import React, { useState } from "react";
import ImageDetail from "./ImageDetail";

function Image({ image }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="image" onClick={() => setShowPopup(true)}>
      <img src={image.download_url} alt={image.author} />
      {showPopup && (
        <ImageDetail image={image} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default Image;
