import "./CartWidget.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Badge } from "react-bootstrap";


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <>
            <Link to='/cart'>
                <BsCart4 />
            </Link>
            {totalQuantity > 0 && (
                <Badge pill bg="light" text="dark">
                    {totalQuantity}
                </Badge>
            )}
        </>
    );
}

export default CartWidget;