import { useContext } from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import CartContext from "../../context/CartContext";
import { BiTrash } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, total, removeItem } = useContext(CartContext);
    console.log({ cart, total });


    const handleClick = (itemId) => {
        removeItem(itemId);
    }

    return (
        <Container>
            <h1>Carrito</h1>
            {cart.length > 0 && (
                <>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td className="tdIzq">{item.price}</td>
                                    <td className="tdIzq">{item.quantity}</td>
                                    <td className="trash"><BiTrash onClick={() => handleClick(item.id)} /></td>
                                </tr>
                            ))}
                            <tr>
                                <td className="total" colSpan={3}>TOTAL</td>
                                <td className="total">$ {total}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h3> Total: ${total}</h3>
                </>
            )}
            {cart.length === 0 && (
                <>
                    <h3>Carrito Vacio</h3>
                    <Link to='/'>
                        <Button variant="dark">Continuar Comprando</Button>
                    </Link>
                </>
            )
            }
        </Container>
    );
}

export default Cart;