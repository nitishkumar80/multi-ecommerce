import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PopularProduct.css";

const ExploreNew = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/explore-new.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "All") {
      setFilteredProducts(products);
    } else if (tab === "Men") {
      setFilteredProducts(products.filter(product => product.category === "Men"));
    } else if (tab === "Women") {
      setFilteredProducts(products.filter(product => product.category === "Women"));
    }
  };

  const handleViewProduct = (productId) => {
    navigate(`/product-explore/${productId}`);
  };

  return (
    <div>
      <h2>Popular Products</h2>

      <div className="tabs">
        {["All", "Men", "Women"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <button onClick={() => handleViewProduct(index)}>View Product</button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ExploreNew;
