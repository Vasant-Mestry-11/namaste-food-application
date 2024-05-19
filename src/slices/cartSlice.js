import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state) => {
      state.items.pop();
    },

    // RTK state that either you mutate the state or return new state {items:[]} from reducer function
    //  if you try to assign any value to state directly it wont change the original state
    // state is just a local copy of original object (Proxy object)
    //  to get the actual state you've to use current(state) function from RTK
    clearCart: (state) => {
      console.log(state)
      console.log(current(state))
      // state.items.length = 0;
      // return []
    }


  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer;