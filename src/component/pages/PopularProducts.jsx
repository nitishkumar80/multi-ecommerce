import React, { useEffect, useState } from "react";
import './PopularProduct.css';
const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/popular-products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Popular Products</h2>
     

      <div className="product-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                View Product
              </a>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
