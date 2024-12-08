import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const GiftDetails = () => {
  const { productId } = useParams(); // Access the dynamic segment
  const [productVariants, setProductVariants] = useState(null);

  useEffect(() => {
    fetch("/gifts-details.json") // Assuming you have a single JSON with products
      .then((response) => response.json())
      .then((data) => {
        // Retrieve the relevant variants based on the productId
        const variants = data.products[productId] || [];
        setProductVariants(variants);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [productId]);

  return (
    <div className="product-details">
      {productVariants ? (
        <div className="variant-list">
          {productVariants.map((variant, index) => (
            <div key={index} className="variant-item">
              <img src={variant.image} alt={variant.title} />
              <h3>{variant.title}</h3>
              <a href={variant.link} target="_blank" rel="noopener noreferrer">
                <button>View Product</button>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default GiftDetails;
