import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({ product }) => {
    return (

        <Card className='cardProducto' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body>
                <Card.Title className='titleCard'>{product.title}</Card.Title>
                <Card.Text className='textCardPrecio'>
                    $ {product.price}
                </Card.Text>
                <Card.Text className='textCard'>
                    {product.description}
                </Card.Text>

                <Link to={`/item/${product.id}`}>
                    <Button variant="primary">
                        Ver detalle
                    </Button>
                </Link>

            </Card.Body>
        </Card>
    );
}

export default Item;