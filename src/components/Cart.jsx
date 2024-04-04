// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 5.0;
    return subtotal + shipping;
  };

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, quantity);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white shadow-md rounded-lg p-4 mb-4 h-[400px] overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">Price: ₹ {item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <FaMinus />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700 mt-2 focus:outline-none"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          <div className="bg-white shadow-md rounded-lg p-4 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p>Subtotal:</p>
              <p>₹{calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping:</p>
              <p>₹5.00</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Total:</p>
              <p>₹{calculateTotal().toFixed(2)}</p>
            </div>
            <button className="bg-black text-white rounded-lg py-2 px-4 mt-4 w-full focus:outline-none">
              Proceed to Checkout
            </button>
            <button
              className="flex items-center justify-center bg-red-500 text-white rounded-lg py-2 px-4 mt-4 w-full hover:bg-red-600 focus:outline-none"
              onClick={clearCart}
            >
              <FaTrash className="mr-2" />
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;