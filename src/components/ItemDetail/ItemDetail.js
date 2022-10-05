//import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../ItemListContainer/Item";

const ItemDetail = ({ product }) => {

    /*const [count, setCount] = useState(0);

     const handleClick = (value) => {
        setCount(value);
    }
 */

    const onAdd = (cant) => {
        console.log(cant);
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
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                </Col>
            </Row>
        </Container>


    );
}
export default ItemDetail;
