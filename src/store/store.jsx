import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{ 
        cart:cartSlice,
        products :productSlice

    }
});


//thunkmiddleware is there by default
//redux binding is used to join our component with redux toolkit 
//hoc component it is react-redux
//react redux provider
export default store;