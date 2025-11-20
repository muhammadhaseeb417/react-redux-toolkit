import products from "./products.json";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <h1>React Products List</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
