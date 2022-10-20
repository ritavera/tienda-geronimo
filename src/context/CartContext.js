import { createContext, useState } from "react";
import Item from "../components/ItemListContainer/Item";

const CartContext = createContext({});
export default CartContext;

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {
        if (!isInCart(product.id)) {
            const item = {
                ...product,
                quantity
            };
            setCart([...cart, item]);
        } else {
            //actualizar quantity
            const itemIndex = cart.findIndex((item) => item.id === parseInt(product.id));
            const itemDraft = { ...cart[itemIndex] };
            itemDraft.quantity = itemDraft.quantity + quantity;
            const cartDraft = [...cart];
            cartDraft[itemIndex] = itemDraft;
            setCart(cartDraft);
        }

    }

    const removeItem = (itemId) => {
        const cartDraft = cart.filter((item) => item.id !== itemId);
        setCart(cartDraft);
    }

    const clearItem = () => {
        setCart([]);
    }
    const isInCart = (id) => cart.some((item) => item.id === parseInt(id));

    //const total = cart.reduce((contador,item) =>contador+(item.price*item.quantity),0);
    let total = 0;
    cart.forEach((item) => {
        total += (item.price * item.quantity);
    })


    let totalQuantity = 0;
    cart.forEach((item) => {
        totalQuantity += (item.quantity);
    })
    console.log(`total cantidad${totalQuantity}`);

    return (
        <CartContext.Provider value={{ cart, total, addItem, removeItem, clearItem, isInCart }}>
            {children};
        </CartContext.Provider>
    )
}