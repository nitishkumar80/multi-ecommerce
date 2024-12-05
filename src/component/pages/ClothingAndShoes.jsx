import React, { useState, useEffect } from "react";
import "./ClothingAndShoes.css";

const ClothingAndShoes = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [data, setData] = useState({ Clothes: [], Shoes: [] });

  useEffect(() => {
    // Fetch data from public folder
    fetch("/clothing-and-shoes.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.categories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Combine all items if "All" is selected
  const displayedItems =
    activeCategory === "All"
      ? [...data.Clothes, ...data.Shoes]
      : data[activeCategory] || [];

  return (
    <div>
      <h2>Clothing and Shoes</h2>
      <p>Upgrade your wardrobe with our latest collection of clothing and footwear for all seasons.</p>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingAndShoes;
