import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate
import "./ClothingAndShoes.css";

const ClothingAndShoes = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [data, setData] = useState({ Clothes: [], Shoes: [] });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from public folder
    fetch("/clothing-and-shoes.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.categories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const displayedItems =
    activeCategory === "All"
      ? [...data.Clothes, ...data.Shoes]
      : data[activeCategory] || [];

  // Navigate to details page with selected product data
  const handleViewProduct = (item, index) => {
    navigate(`/product-shoes/${index}`, { state: item }); // Pass product data as state
  };

  return (
    <div>
     
     

      {/* Sub-navigation */}
      <div className="sub-nav">
        {["All", "Clothes", "Shoes"].map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Items */}
      <div className="item-list">
        {displayedItems.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.title} className="item-image" />
            <h3>{item.title}</h3>
            <button
              className="view-product-title"
              onClick={() => handleViewProduct(item, index)}
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingAndShoes;
