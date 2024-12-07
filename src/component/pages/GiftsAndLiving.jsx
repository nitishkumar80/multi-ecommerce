import React, { useState, useEffect } from "react";
import "./GiftsAndLiving.css";

const GiftsAndLiving = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [data, setData] = useState({ Gifts: [], HomeEssentials: [], Decor: [] });

  useEffect(() => {
    // Fetch data from public folder
    fetch("/gifts-and-living.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.categories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Combine all items if "All" is selected
  const displayedItems =
    activeCategory === "All"
      ? [...data.Gifts, ...data.HomeEssentials, ...data.Decor]
      : data[activeCategory] || [];

  return (
    <div>
      <h2>Gifts and Living</h2>
      <p>Find the perfect gifts and home living essentials to brighten someone's day or your space!</p>

      {/* Sub-navigation */}
      <div className="sub-nav">
        {["All", "Gifts", "HomeEssentials", "Decor"].map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>

      {/* Display Items */}
      <div className="item-list">
        {displayedItems.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.title} className="item-image" />
            <h3>{item.title}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftsAndLiving;
