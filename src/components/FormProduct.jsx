import React from "react";
import Button from "./Button";
import "../index.css";
const FormProduct = ({ add, arrays }) => {
  return (
    <form onSubmit={add} className="formProduct">
      <label htmlFor="product">Produit</label>
      <div>
        <input type="text" name="product" id="product" required />
      </div>

      <label htmlFor="nbr">Nombre</label>
      <div>
        <input type="number" name="nbr" id="nbr" required />
      </div>

      <label htmlFor="comment">Commentaire</label>
      <div>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
      </div>
      <Button />
    </form>
  );
};

export default FormProduct;
