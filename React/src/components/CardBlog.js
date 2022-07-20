import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardBlog(e) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <div class="row">
            <div class="col-10">
            <Card.Title>{e.title}</Card.Title>
            </div>
            <div class="col-2">
            <button>edit</button>
            </div>
          </div>
          
          
          <Card.Text>
            {e.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
  

export default CardBlog