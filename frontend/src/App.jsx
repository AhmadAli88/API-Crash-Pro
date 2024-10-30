/*eslint-disable*/
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //   axios.get('http://localhost:5000/products')
    //  .then(res=> setProducts(res.data))
    (async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data)
      console.log(response.data);
    })();
  }, []);

  return (
    <>
      <h1>Test</h1>
      <h2>Number of products: {products.length}</h2>
    </>
  );
}

export default App;
