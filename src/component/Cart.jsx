import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity,decrementQuantity } from '../store/features/Cart/cart';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.products);
const dispatch=useDispatch()

  const increment = (item) => {
    // Add your dispatch logic here to increment the quantity of the item in the cart
    dispatch(incrementQuantity(item))
  };

  const decrement = (item) => {
    // Add your dispatch logic here to decrement the quantity of the item in the cart
    dispatch(decrementQuantity(item))
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="border rounded-lg overflow-hidden divide-y divide-gray-300">
          {cartItems.map((item) => (
            <li key={item.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={item.image}
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
      )}
    </div>
  );
}
