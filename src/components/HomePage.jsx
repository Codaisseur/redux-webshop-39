import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      console.log("products", response.data);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const renderProducts = () => {
    return products.map((p) => <ProductCard key={p.id} {...p} />);
  };

  return (
    <div>
      <h1>My Products Page</h1>
      {!products.length ? <p>Loading...</p> : renderProducts()}
    </div>
  );
};

export default HomePage;
