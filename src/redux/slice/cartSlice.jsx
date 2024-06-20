import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice ({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      
      const existingItem = state.itemList.find((item) => item.id === newItem);

      if(existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.images,
        });
        state.totalQuantity++;
      }
    }
  }
});

export const CartActions = cartSlice.actions;
export const {} = cartSlice.actions;

export default cartSlice;