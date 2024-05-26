import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    Axios({
      method: 'GET',
      url: '/api/gallery',
    })
      .then((response) => {
        setGalleryPhotos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`error getting photos`, error);
      });
  };

  return (
    <div data-testid='app'>
      <header>
        <h1>React Gallery</h1>
      </header>
      <GalleryList fetchPhotos={fetchPhotos} galleryPhotos={galleryPhotos} setGalleryPhotos={setGalleryPhotos} />
    </div>
  );
}

export default App;
