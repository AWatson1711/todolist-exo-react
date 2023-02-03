import React, { useState } from "react";
import "../index.css";
import ChangeStatus from "./ChangeStatus";
import Delete from "./Delete";
const ShowProduct = ({ product, deleteElt, id }) => {
  const [isActive, setIsActive] = useState(product.active);
  let articleContainer;

  if (isActive == false) {
    articleContainer = "showProductContainer green";
  } else {
    articleContainer = "showProductContainer yellow";
  }

  const changeStatus = () => {
    if (isActive == true) {
      setIsActive(false);
    }
    if (isActive == false) {
      setIsActive(true);
    }
    console.log(product);
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
