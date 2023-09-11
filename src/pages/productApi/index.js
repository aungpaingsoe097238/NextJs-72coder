import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");

  const loadProducts = async () => {
    const response = await fetch("/api/product");
    const data = await response.json();
    setProducts(data.products);
  };

  const submitPost = async () => {
    await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "content-type": "application/json",
      },
    });
    loadProducts();
  };

  const productDelete = async (productId) => {
    await fetch(`/api/product/${productId}`, {
      method: "DELETE"
    });
    loadProducts();
  };

  const productEdit = async (productId) => {
    await fetch(`/api/product/${productId}`, {
      method: "PATCH",
      body : JSON.stringify({ title }),
      headers : {
        "content-type" : "application/json"
      }
    });
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <h1>All Products</h1>

      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={submitPost}>Add Product</button>

      {products.map((product) => (
          <div key={product.id}>
            <strong>{product.title}</strong>
            <button onClick={() => productDelete(product.id)}>Delete</button>
            <button onClick={() => productEdit(product.id)}>Edit</button>
          </div>
      ))}
    </>
  );
};

export default Product;
