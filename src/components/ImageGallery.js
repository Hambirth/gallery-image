import React, { useState, useEffect } from "react";
import Image from "./Image";
import { toast } from "react-toastify";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
          autoClose: 5000,
        });
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageGallery;
