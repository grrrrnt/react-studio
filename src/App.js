import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]); // List of items in the cart

  return (
    <div className="App">
      <h1 className="App-title">Grant's Bakery</h1>
      <div className="App-content">
        <div className="bakery-items-columns">
          {bakeryData.map((item, _) => (
            <BakeryItem item={item} cart={cart} setCart={setCart} />
          ))}
        </div>
        <div className="cart-column-empty" />
      </div>
      <div className="cart-column">
        <h2>Cart</h2>
        {renderCartItems(cart)}
        {renderCartTotal(cart)}
        <button
          onClick={() => window.open("https://www.youtube.com/watch?v=7T1OHha9agg", '_blank')}
          className="checkout-button">Check Out</button>
      </div>
    </div>
  );
}

function renderCartItems(cart) {
  if (cart.length === 0) {
    return (
      <div>
        <p>Your cart is empty. Start shopping now!</p>
      </div>
    );
  }

  var qty = {}
  for (var i in cart) {
    if (cart[i].name in qty) {
      qty[cart[i].name] += 1;
    } else {
      qty[cart[i].name] = 1;
    }
  }

  return (
    <div>
      {
        Object.entries(qty).map(([key, value]) => {
           return (
            <div className="cart-item">
              <p>{value} x {key}</p>
            </div>
          )
        })
      }
    </div>
  );
}

function renderCartTotal(cart) {
  var total = 0;
  for (var i in cart) {
    total += cart[i].price;
  }

  return (
    <div className="cart-total">
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default App;
