function ProductCard({ name, price, description }) {
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
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
