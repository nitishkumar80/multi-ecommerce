import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SideNavigation from "./component/SideNavigation";
import ProductDetails from "./component/pages/ ProductDetails";
import PopularProducts from "./component/pages/PopularProducts";




function App() {
  return (
    <Router>
      <div className="App">
        <SideNavigation />
        <Routes>

          <Route path="/" element={<PopularProducts />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
