import "./ItemCount.css";
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className="counter">
            <Button className ="botonCount" variant="primary" size="sm" disabled={count <= 1} onClick={decrease}>-
            </Button>
            <span>{count}</span>
            <Button className ="botonCount" variant="primary" size="sm" disabled={count >= stock} onClick={increase}>+
            </Button>
            <div>
                <Button className ="botonCount" variant="primary" size="sm" disabled={stock <= 0} onClick={() => onAdd(count)}>
                    Agregar
                </Button>
            </div>
        </div>
    );
}

export default ItemCount;