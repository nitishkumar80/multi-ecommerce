import React, { useState, Suspense, lazy } from "react";
import { FaHome, FaBoxOpen, FaTshirt, FaGift, FaLightbulb } from "react-icons/fa";
import "./SideNavigation.css";

// Lazy import pages
const PopularProducts = lazy(() => import("./pages/PopularProducts"));
const ExploreNew = lazy(() => import("./pages/ExploreNew"));
const ClothingAndShoes = lazy(() => import("./pages/ClothingAndShoes"));
const GiftsAndLiving = lazy(() => import("./pages/GiftsAndLiving"));
const Inspiration = lazy(() => import("./pages/Inspiration"));

const SideNavigation = () => {
  const [activePage, setActivePage] = useState("Explore New");

  // Map activePage to the corresponding component
  const renderPage = () => {
    switch (activePage) {
      case "Popular Products":
        return <PopularProducts />;
      case "Explore New":
        return <ExploreNew />;
      case "Clothing and Shoes":
        return <ClothingAndShoes />;
      case "Gifts and Living":
        return <GiftsAndLiving />;
      case "Inspiration":
        return <Inspiration />;
      default:
        return <div><h2>Page Not Found</h2></div>;
    }
  };

  // Icon mapping for each page
  const iconMapping = {
    "Popular Products": <FaHome />,
    "Explore New": <FaBoxOpen />,
    "Clothing and Shoes": <FaTshirt />,
    "Gifts and Living": <FaGift />,
    "Inspiration": <FaLightbulb />,
  };

  return (
    <div className="app-container">
      {/* Side Navigation */}
      <div className="side-nav">
        <div className="brand">
          <h1>BuyMore</h1>
        </div>
        <ul className="nav-links">
          {["Popular Products", "Explore New", "Clothing and Shoes", "Gifts and Living", "Inspiration"].map((page) => (
            <li
              key={page}
              className={activePage === page ? "active" : ""}
              onClick={() => setActivePage(page)}
            >
              {/* Display Icon and Text */}
              <span className="icon">{iconMapping[page]}</span>
              {page}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          {renderPage()}
        </Suspense>
      </div>
    </div>
  );
};

export default SideNavigation;