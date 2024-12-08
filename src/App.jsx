import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SideNavigation from "./component/SideNavigation";
import ProductDetails from "./component/pages/ProductDetails";
import PopularProducts from "./component/pages/PopularProducts";
import ExploreNew from "./component/pages/ExploreNew";
import ProductDetailsExplore from "./component/pages/ProductDetailsExplore";
import ClothingAndShoes from "./component/pages/ClothingAndShoes";
import ClothesShoesDetails from "./component/pages/ClothesShoesDetails";
import GiftsAndLiving from "./component/pages/GiftsAndLiving";
import GiftDetails from "./component/pages/GiftDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <SideNavigation />
        <Routes>
          {/* Route for Popular Products */}
          <Route path="/" element={<PopularProducts />} />
          
          {/* Route for Product Details */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          
          {/* Route for Explore New */}
          <Route path="/explore" element={<ExploreNew />} />
          <Route path="/product-explore/:productId" element={<ProductDetailsExplore />} />

          {/* Route for Clothing and Shoes */}
          <Route path="/clothing-and-shoes" element={<ClothingAndShoes />} />
          <Route path="/product-shoes/:productId" element={<ClothesShoesDetails />} />

          {/* Route for Gifts and Living */}
          <Route path="/gifts" element={<GiftsAndLiving />} />
          <Route path="/product-gift/:productId" element={<GiftDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
