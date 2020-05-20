import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../store/products/actions";
import { getAllProducts } from "../store/products/selectors";

const HomePage = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector(getAllProducts);

  console.log("Products in component!", reduxProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderProducts = () => {
    return reduxProducts.map((p) => <ProductCard key={p.id} {...p} />);
  };

  return (
    <div>
      <h1>My Products Page</h1>
      {!reduxProducts.length ? <p>Loading...</p> : renderProducts()}
    </div>
  );
};

export default HomePage;
