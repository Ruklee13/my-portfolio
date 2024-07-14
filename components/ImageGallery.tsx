'use client'
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios if using axios

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getimages = async () => {
    const res = await axios.get('api/picture')
    return res.data
  }
  const data = getimages();
  console.log('qassup')
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(images); // Ensure data structure matches expectations

  // Example rendering logic
  return (
    <div>
      {/* Render your image gallery using 'images' */}
      {images.map((item) => (
        <div>something</div>
      ))}
    </div>
  );
};

export default ImageGallery;
