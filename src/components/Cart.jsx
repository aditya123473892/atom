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
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-8">My Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-gray-900 rounded-lg p-6 mb-8 shadow-2xl">
              {cartItems.length === 0 ? (
                <p className="text-gray-400 text-center">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center mb-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg shadow-lg mr-6"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-gray-400">Price: ₹ {item.price}</p>
                      <div className="flex items-center mt-2">
                        <button
                          className="text-gray-400 hover:text-gray-200 focus:outline-none"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <FaMinus className="w-4 h-4" />
                        </button>
                        <span className="mx-2 text-lg">{item.quantity}</span>
                        <button
                          className="text-gray-400 hover:text-gray-200 focus:outline-none"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <FaPlus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        className="text-red-600 hover:text-red-800 mt-2 focus:outline-none"
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
          <div className="lg:col-span-4">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <p className="text-lg">Subtotal:</p>
                <p className="text-lg">₹{calculateSubtotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-lg">Shipping:</p>
                <p className="text-lg">₹5.00</p>
              </div>
              <div className="flex justify-between font-semibold text-xl mt-4">
                <p>Total:</p>
                <p>₹{calculateTotal().toFixed(2)}</p>
              </div>
              <button className="bg-indigo-600 text-white rounded-lg py-3 px-6 mt-6 w-full focus:outline-none hover:bg-indigo-700 transition duration-200 shadow-lg">
                Proceed to Checkout
              </button>
              <button
                className="flex items-center justify-center bg-red-600 text-white rounded-lg py-3 px-6 mt-4 w-full hover:bg-red-700 focus:outline-none transition duration-200 shadow-lg"
                onClick={clearCart}
              >
                <FaTrash className="mr-2 w-4 h-4" /> Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;