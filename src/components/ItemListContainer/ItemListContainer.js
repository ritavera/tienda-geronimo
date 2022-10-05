import './ItemListContainer.css';
import ItemList from "./ItemList";
//import ItemCount from "../ItemCount/ItemCount";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts, getCategoryProducts } from "../../utils/products";

const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            getCategoryProducts(categoryId)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        } else {
            getAllProducts()
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        }
    }, [categoryId])

    return (
        <Container>
            <h1>Productos</h1>
            <div className="sign">
                <span className="flicker">{greeting}</span>
            </div>
            <ItemList products={products} />
        </Container>
    );
}

export default ItemListContainer;