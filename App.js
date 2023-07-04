
import React, { useState, useEffect } from "react";
import "./App.css";
import User from "./User.js";
import Log from "./Log.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About.js";
import Dashboard from "./Dashboard";
import Pic1 from "./Pic1";
import Pic2 from "./Pic2";
import "./Pic.css";
import CartItem from "./CartItem";
import Cart from "./Cart";
import nav from "./About.css";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";

function App() {
  const [cart, setCart] = useState([]);
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserState({
          uid: user?.uid,
          email: user?.email,
        });
      } else {
        setUserState(null);
      }
    });
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert("successfully added to cart");
    console.log(item);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/Log" element={<Log />} />
          <Route path="/User" element={<User />} />
          <Route path="/dashboard" element={<Dashboard addToCart={addToCart} />} />
          <Route path="/Girls dresses" element={<Pic1 addToCart={addToCart} />} />
          <Route path="/Baby dresses" element={<Pic2 addToCart={addToCart} />} />
          {/* <Route path="/Mens Wear" element={<Pic3 addToCart={addToCart} />} />
          <Route path="/Watches for girls" element={<Pic4 addToCart={addToCart} />} /> */}
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/cartItem" element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;