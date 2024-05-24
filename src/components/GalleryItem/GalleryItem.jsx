import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function GalleryItem({ fetchPhotos, photo }) {
  const likePhoto = (photoID) => {
    Axios({
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

  return (
    <Col>
      <Card key={photo.id} className='photoCard'>
        <Card.Body>
          <Card.Title>{photo.title}</Card.Title>
          <Card.Subtitle>{photo.description}</Card.Subtitle>
          <Card.Img src={photo.url} style={{ width: '200px', height: 'auto' }} />
          <Card.Text>{photo.likes} Likes</Card.Text>
          <Button onClick={() => likePhoto(photo.id)}>🧡</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
