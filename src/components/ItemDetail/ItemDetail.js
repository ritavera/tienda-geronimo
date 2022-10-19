//import { useState } from "react";
import { useState } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../ItemListContainer/Item";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

    /*const [count, setCount] = useState(0);

     const handleClick = (value) => {
        setCount(value);
    }
 */
    const [showItemCount, setShowItemCount] = useState(true);

    const onAdd = (cant) => {
        console.log(cant);
        setShowItemCount(false);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Item product={product} />
                </Col>
                {/* <button onClick={()=>handleClick(count-1)}>-</button>
            <h4>Cantidad {count}</h4>
            <button onClick={()=>handleClick(count+1)}>+</button> */}
                <Col>
                    {
                        showItemCount && (
                            <ItemCount initial={0} stock={product.stock} onAdd={onAdd} />
                        )
                    }
                    {
                        !showItemCount && (
                            <Link to ='/cart'>
                            <Button variant="success">Terminar Compra</Button>
                            </Link>
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}
export default ItemDetail;
