import "./CartWidget.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <Link to='/cart'>
            <BsCart4 />
        </Link>
    );
}

export default CartWidget;