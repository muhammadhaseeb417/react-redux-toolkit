import { useDispatch } from "react-redux";
import { addItems } from "../redux/slices/cart-slice";

function ProductCard({ name, price, description }) {
    const dispatch = useDispatch(addItems)

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            margin: "10px"
        }}>
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>${price}</h3>
            <button onClick={e => dispatch(addItems({ name: name, description: description, price: price }))} >Add to Cart</button>
        </div>
    );
}

export default ProductCard;
