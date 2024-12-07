import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetailsExplore = () => {
  const { productId } = useParams(); // Access the dynamic segment
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    fetch("/explordetails.json")
      .then((response) => response.json())
      .then((data) => {
        const productVariants = data.products[productId] || [];
        setVariants(productVariants);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [productId]);

  return (
    <div className="variant-list">
      {variants.map((variant, index) => (
        <div key={index} className="variant-item">
          <img src={variant.image} alt={variant.title} />
          <h3>{variant.title}</h3>
          <p>{variant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsExplore;
