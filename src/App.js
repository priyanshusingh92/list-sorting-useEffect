import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import List from "./List";

export default function App() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("ascending");

  const sortCallback = useCallback(
    (a, b) => {
      return order === "ascending" ? a.price - b.price : b.price - a.price;
    },
    [order]
  );

  const fetchProductsHandler = useCallback(() => {
    console.log("created");
    fetch("https://fakerapi.it/api/v1/products")
      .then((data) => data.json())
      .then((productsData) => {
        setProducts([...productsData.data.sort(sortCallback)]);
      });
  }, [sortCallback]);

  useEffect(() => {
    setProducts((products) => [...products.sort(sortCallback)]);
  }, [sortCallback]);

  return (
    <div className="App">
      <select onChange={(event) => setOrder(event.target.value)} value={order}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <button onClick={fetchProductsHandler}>Fetch Products</button>
      <List products={products} />
    </div>
  );
}
