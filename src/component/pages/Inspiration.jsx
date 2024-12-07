import React, { useState, useEffect } from "react";
import "./Inspiration.css";

const Inspiration = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [data, setData] = useState({ Ideas: [], Tips: [], Trends: [] });

  useEffect(() => {
    // Fetch data from public folder
    fetch("/inspiration.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.categories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Combine all items if "All" is selected
  const displayedItems =
    activeCategory === "All"
      ? [...data.Ideas, ...data.Tips, ...data.Trends]
      : data[activeCategory] || [];

  return (
    <div>
      <h2>Inspiration</h2>
      <p>Get inspired by curated ideas, tips, and trends to spark your creativity and lifestyle.</p>

      {/* Sub-navigation */}
      <div className="sub-nav">
        {["All", "Ideas", "Tips", "Trends"].map((category) => (
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
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
