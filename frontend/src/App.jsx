/*eslint-disable*/
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  // const { products, error, loading } = customReactQuery("/api/products");
  useEffect(() => {
    //   axios.get('http://localhost:5000/products')
    //  .then(res=> setProducts(res.data))
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(false);
        setError(false);
        const response = await axios.get(`/api/products?search=${search}`, {
          signal: controller.signal,
        });
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Rewquest Error", error.message);
          return;
        }
        setError(true);
        setLoading(true);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [search]);
  // if (error) {
  //   return <h1>Error fetching products.</h1>;
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Test</h1>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error...</h1>}
      <h2>Number of products: {products.length}</h2>
    </>
  );
}

export default App;

const customReactQuery = (urlPath) => {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   //   axios.get('http://localhost:5000/products')
  //   //  .then(res=> setProducts(res.data))
  //   (async () => {
  //     try {
  //       setLoading(false);
  //       setError(false);
  //       const response = await axios.get(urlPath);
  //       setProducts(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       setError(true);
  //       setLoading(true);
  //     }
  //   })();
  // }, []);
  // return {
  //   products,
  //   error,
  //   loading,
  // };
};
