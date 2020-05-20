import React from "react";

const ProductCard = (props) => {
  return (
    <div style={{ border: "3px solid black", marginTop: 10 }}>
      <img src={props.image_link} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button
          style={{ width: 100, height: 40, marginRight: 10 }}
          onClick={props.onAddClick}
        >
          Add
        </button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default ProductCard;
