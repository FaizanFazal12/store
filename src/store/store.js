import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/Cart/cart"
export default configureStore({
  reducer: {
    cart:cartReducer,
  },
})