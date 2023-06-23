import React from 'react';
import './Cart.scss';

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          cant: newQuantity,
          totalOrder: `$ ${(newQuantity * item.price.replace('$ ', '')).toFixed(2)}`,
        };
      }
      return item;
    });

    const filteredCartItems = updatedCartItems.filter((item) => item.cant > 0);

    localStorage.setItem('cart', JSON.stringify(filteredCartItems));
    window.location.reload();
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    window.location.reload();
  };

  const handlePay = () => {
    localStorage.removeItem('cart');
    window.location.reload();
  };

  return (
    <div className="cart-container">
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-info">
                <img className="item-image" src={item.photo} alt={item.name} />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <div className="item-quantity">
                    <button
                      className="quantity-button"
                      onClick={() => handleQuantityChange(item.id, item.cant - 1)}
                    >
                      -
                    </button>
                    <input
                      className="quantity-input"
                      type="number"
                      min="1"
                      value={item.cant}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    />
                    <button
                      className="quantity-button"
                      onClick={() => handleQuantityChange(item.id, item.cant + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="item-actions">
                <p className="item-price">{item.totalOrder}</p>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button className="pay-button" onClick={handlePay}>
            Pagar
          </button>
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
