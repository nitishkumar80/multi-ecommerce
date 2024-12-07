import React, { useState, useEffect } from "react";
import "./ExploreNew.css";

const ExploreNew = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [data, setData] = useState({ Men: [], Women: [] });

  useEffect(() => {
    // Fetch data from public folder
    fetch("/explore-new.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.categories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Combine all items if "All" is selected
  const displayedItems =
    activeCategory === "All"
      ? [...data.Men, ...data.Women]
      : data[activeCategory] || [];

  return (
    <div>
      <h2>Explore New</h2>
      <p>Discover the latest and trending items.</p>

      {/* Sub-navigation */}
      <div className="sub-nav">
        {["All", "Men", "Women"].map((category) => (
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
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="item-link">
        View Product
      </a>
    </div>
  ))}
</div>
    </div>
  );
};

export default ExploreNew;
