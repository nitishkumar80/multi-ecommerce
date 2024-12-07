import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SideNavigation from "./component/SideNavigation";
import ProductDetails from "./component/pages/ ProductDetails";
import PopularProducts from "./component/pages/PopularProducts";
import ExploreNew from "./component/pages/ExploreNew";
import ProductDetailsExplore from "./component/pages/ProductDetailsExplore";




function App() {
  return (
    <Router>
      <div className="App">
        <SideNavigation />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<PopularProducts />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/explore" element={<ExploreNew />} />
          <Route path="/product-explore/:productId" element={<ProductDetailsExplore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
