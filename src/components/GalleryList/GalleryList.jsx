import GalleryItem from '../GalleryItem/GalleryItem';
import Row from 'react-bootstrap/Row';

export default function GalleryList({ galleryPhotos, fetchPhotos, setGalleryPhotos }) {
  console.log(galleryPhotos);
  return (
    <>
      <h2 data-testid='galleryList'>My Gallery</h2>
      <Row xs='1' sm='2' md='3' lg='4'>
        {galleryPhotos.map((photo) => (
          <GalleryItem
            key={photo.id}
            galleryPhotos={galleryPhotos}
            fetchPhotos={fetchPhotos}
            setGalleryPhotos={setGalleryPhotos}
            photo={photo}
          />
        ))}
      </Row>
    </>
  );
}
