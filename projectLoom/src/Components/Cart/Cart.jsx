import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "High-Speed Shuttle",
      price: 4500,
      quantity: 2,
      img: "/asset/airjet dobby connector.jpg",
    },
    {
      id: 2,
      name: "Low-Speed Gear",
      price: 4500,
      quantity: 1,
      img: "/asset/powerlooms-gear-40-t-2f-80-t-500x500.jpg",
    },
  ]);

  const updateQty = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  return (
    <div className="cart-page">

      {/* Header */}
      <header className="cart-header">
        <div className="logo">
          <img src="/asset/logo.png" alt="logo" />
          <div>
            <h1>PowerLoom</h1>
            <p>Spares Hub</p>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search for products..."
          className="search"
        />

        <div className="actions">
          <span>🛒 Cart ({cartItems.length})</span>
          <span>👤 Profile</span>
        </div>
      </header>

      {/* Title */}
      <h2 className="cart-title">Shopping Cart</h2>

      <div className="cart-content">

        {/* LEFT SECTION */}
        <div className="cart-items">

          <div className="cart-head">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="cart-row">

              <div className="product-info">
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </div>

              <span>₹{item.price.toLocaleString()}</span>

              <div className="qty-box">
                <button onClick={() => updateQty(item.id, -1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQty(item.id, 1)}>+</button>
              </div>

              <span>₹{(item.price * item.quantity).toLocaleString()}</span>

              <button
                className="remove"
                onClick={() => removeItem(item.id)}
              >
                🗑 Remove
              </button>

            </div>
          ))}

        </div>

        {/* RIGHT SUMMARY */}
        <div className="cart-summary">
          <h3>Cart Summary</h3>

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="summary-row">
            <span>Tax:</span>
            <span>₹{tax.toLocaleString()}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total:</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

          <p className="continue">Continue Shopping</p>
        </div>

      </div>
    </div>
  );
};

export default Cart;
