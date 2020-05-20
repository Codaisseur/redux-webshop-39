import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/products/actions";
import { getAllProducts } from "../store/products/selectors";
import { addToCart } from "../store/cart/actions";
import { amountOfItemsInCart } from "../store/cart/selectors";

import ProductCard from "./ProductCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector(getAllProducts);
  const amountItemsInCart = useSelector(amountOfItemsInCart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function onAddClick(product) {
    dispatch(addToCart(product));
    console.log("trying to add product", product);
  }

  const renderProducts = () => {
    return reduxProducts.map((p) => (
      <ProductCard key={p.id} {...p} onAddClick={() => onAddClick(p)} />
    ));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 80,
          marginLeft: 80,
        }}
      >
        <h1>My Products Page</h1>
        <h3>My Cart: {amountItemsInCart}</h3>
      </div>

      {!reduxProducts.length ? <p>Loading...</p> : renderProducts()}
    </div>
  );
};

export default HomePage;
