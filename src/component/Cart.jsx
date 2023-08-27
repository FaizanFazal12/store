import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../store/features/Cart/cart';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const increment = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="border rounded-lg overflow-hidden divide-y divide-gray-300">
            {cartItems.map((item) => (
              <li key={item.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4">
                    <p className="text-xl font-medium">{item.title}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={() => decrement(item)}
                  >
                    -
                  </button>
                  <span className="mx-2 text-lg">{item.quantity}</span>
                  <button
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={() => increment(item)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <button
              className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
              onClick={() => navigate("/payment")}
            >
              Pay Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
