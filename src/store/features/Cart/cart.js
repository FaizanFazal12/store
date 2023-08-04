import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);
    
      if (existingProduct && existingProduct.quantity === 1) {
        // Remove the product from the cart
        state.products = state.products.filter((product) => product.id !== id);
      } else if (existingProduct && existingProduct.quantity > 1) {
        // Decrement the quantity
        existingProduct.quantity -= 1;
      }
    }
    // With this change, your cart will correctly handle the decrementing of product quantities and remove items when their quantity becomes zero.
        
  },
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
