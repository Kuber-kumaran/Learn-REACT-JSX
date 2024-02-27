import React, { useState } from "react";

export const Cart = () => {
  const [productCount, setProductCount] = useState(3);

  const handleClick = () => {
    setProductCount(productCount -1);
  };

  return (
    <>
      <h1>Quantity of products customer bought: {productCount}</h1>
      <button onClick={handleClick}>{productCount} click me</button>
    </>
  );
};
