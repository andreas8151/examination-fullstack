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
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignOutButton,
} from "@clerk/clerk-react";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
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

          <Route
            path="/login"
            element={
              <>
                {" "}
                <SignedIn>
                  <SignOutButton id="signOutBtn" />
                  <Admin />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/admin/:productId"
            element={
              <>
                {" "}
                <SignedIn>
                  <AdminUpdateItem />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <SignedIn>
                  <Admin />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <SignedOut>
        <Footer />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;
