import React, { useState } from "react";
import "../index.css";
import ChangeStatus from "./ChangeStatus";
import Delete from "./Delete";
const ShowProduct = ({ product, deleteElt, id, products }) => {
  const [isActive, setIsActive] = useState(product.active);
  let articleContainer;

  if (isActive == false) {
    articleContainer = "showProductContainer green";
  } else {
    articleContainer = "showProductContainer yellow";
  }

  const changeStatus = (id) => {
    products.map((product) => {
      if (product.id === id) {
        setIsActive({ ...product, active: !isActive });
      }
      return product;
    });
  };

  return (
    <div className={articleContainer}>
      <h3>{product.name}</h3>
      <p>{product.nombre}</p>
      <p>{product.comment}</p>
      <ChangeStatus changeStatus={changeStatus} />
      <Delete deleteElt={deleteElt} id={id} />
    </div>
  );
};

export default ShowProduct;
