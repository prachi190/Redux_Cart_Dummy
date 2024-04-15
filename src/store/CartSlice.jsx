import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the cart slice
const initialState = {
    cartItems: [] // Initialize cartItems as an empty array to store items added to the cart
};

// Create a slice of state for managing the cart
const cartSlice = createSlice({
    name: 'cart', // Name of the slice
    initialState, // Initial state
    reducers: {
        // Reducer function to handle adding items to the cart
        add(state, action) {
            // Add the payload (new item) to the cartItems array in the state
            state.cartItems.push(action.payload);
            // Note: This mutates the state directly, but Immer library ensures immutability behind the scenes
        },
        remove(state, action) {
            // Filter out the item with the specified id from the cartItems array
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            // Note: This mutates the state directly, but Immer library ensures immutability behind the scenes
        }
    }
});

// Extract the action creators from the cart slice
export const { add,remove} = cartSlice.actions;

// Export the reducer function
export default cartSlice.reducer;
