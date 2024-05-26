import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function GalleryItem({ fetchPhotos, photo }) {
  const [toggle, setToggle] = useState(true);
  const likePhoto = (photoID) => {
    axios({
      method: 'PUT',
      url: `/api/gallery/like/${photoID}`,
    })
      .then(() => {
        fetchPhotos();
      })
      .catch((error) => {
        console.log('error liking photo', error);
      });
  };

  const togglePhoto = (photoID) => {
    console.log('clicked image');
    setToggle(!toggle);
  };

  return (
    <>
      {!toggle ? (
        <Col>
          <Card data-testid='galleryItem'>
            <Card.Body data-testid='toggle' onClick={() => togglePhoto(photo.id)}>
              <Card.Title>{photo.title}</Card.Title>
              <Card.Subtitle data-testid='description'>{photo.description}</Card.Subtitle>
              <Card.Text>{photo.likes} Likes</Card.Text>
              <Button data-testid='like' onClick={() => likePhoto(photo.id)}>
                🧡
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <Col>
          <Card data-testid='galleryItem' key={photo.id} className='photoCard'>
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
              <Card.Img
                data-testid='toggle'
                onClick={() => togglePhoto(photo.id)}
                src={photo.url}
                style={{ width: '200px', height: 'auto' }}
              />
              <Card.Text>{photo.likes} Likes</Card.Text>
              <Button data-testid='like' onClick={() => likePhoto(photo.id)}>
                🧡
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
}
