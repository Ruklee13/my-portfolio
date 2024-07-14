'use client'
import { useEffect, useState } from 'react';
import ImagesModal from '@/components/imageview';
import Image from 'next/image';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/picture');
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative w-full h-64 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <Image
                src={`data:${image.mimetype};base64,${image.data}`}
                alt={image.filename}
                className="object-cover w-full h-full"
                width={1280}
                height={720}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No images available</p>
      )}
      {selectedImage && (
        <ImagesModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}
