import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/men.png";
import woman_banner from "./Components/Assets/women.png";
import kids_banner from "./Components/Assets/kids.png";
import { Admin } from "./Pages/Admin";
import { AdminUpdateItem } from "./Pages/AdminUpdateItem";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="mens" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={woman_banner} category="womens" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:productId" element={<AdminUpdateItem />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
