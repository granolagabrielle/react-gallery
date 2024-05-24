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
          <Card>
            <Card.Body onClick={() => togglePhoto(photo.id)}>
              <Card.Subtitle>{photo.description}</Card.Subtitle>
              <Card.Text>{photo.likes} Likes</Card.Text>
              <Button onClick={() => likePhoto(photo.id)}>🧡</Button>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <Col>
          <Card key={photo.id} className='photoCard'>
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
              <Card.Img
                onClick={() => togglePhoto(photo.id)}
                src={photo.url}
                style={{ width: '200px', height: 'auto' }}
              />
              <Card.Text>{photo.likes} Likes</Card.Text>
              <Button onClick={() => likePhoto(photo.id)}>🧡</Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
}
