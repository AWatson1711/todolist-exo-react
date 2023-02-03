import React, { useState } from "react";
import FormProduct from "./components/FormProduct";
import ShowProduct from "./components/ShowProduct";

const Todolist = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "riz",
      active: false,
      comment: "Prendre un sac de riz de 25kg",
      nombre: 1,
    },
    {
      id: 2,
      name: "pate",
      active: true,
      comment: "Des pates panzani",
      nombre: 5,
    },
    {
      id: 3,
      name: "poulet",
      active: false,
      comment: "Des cuisse de preference",
      nombre: 2,
    },
    {
      id: 4,
      name: "poisson",
      active: false,
      comment: "Frais du poissonier",
      nombre: 3,
    },
    {
      id: 5,
      name: "tomate",
      active: false,
      comment: "De la sauce tomate pour les pates",
      nombre: 6,
    },
    {
      id: 6,
      name: "fraise",
      active: false,
      comment: "Pour mon plaisir ^^",
      nombre: 12,
    },
  ]);

  const productSubmit = (e) => {
    e.preventDefault();
    const productName = e.target[0].value;
    const productNbr = e.target[1].value;
    const productComment = e.target[2].value;
    //const copyProduct = products.filter(() => true);
    const copy = [...products];
    let productId = products[products.length - 1].id + 1;
    let isActive = products[0].active;
    copy.push({
      id: productId,
      name: productName,
      active: isActive,
      nombre: productNbr,
      comment: productComment,
    });
    setProducts(copy);
  };

  const deleteProduct = (idProduct) => {
    const copy = [...products];
    setProducts(copy.filter((product) => product.id !== idProduct));
  };

  return (
    <div>
      <header>
        <h1>Todolist Course</h1>
      </header>
      <main>
        <h2>Add Product</h2>
        <section>
          <FormProduct add={productSubmit} />
        </section>

        <section>
          <h2>Show Product</h2>
          {products.map((product) => {
            return (
              <article key={product.id}>
                <ShowProduct
                  product={product}
                  id={product.id}
                  deleteElt={deleteProduct}
                  products={products}
                />
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Todolist;
