import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import StatusCode from '../utlis/statusCode';

// Define the initial state of the cart slice
const initialState = {
    dataArray: [] ,// Initialize cartItems as an empty array to store items added to the cart
    status :'idle'
};



// Create a slice of state for managing the cart
const productSlice = createSlice({
    name: 'products', // Name of the slice
    initialState, // Initial state
    reducers: {
        // fetchProducts(state,action){
        //     state.dataArray = action.payload;
        // }
    },
    extraReducers:(builder) =>{
      builder
         .addCase(getProducts.pending,(state,action)=>{
            state.status =StatusCode.LOADING;
         })
        .addCase(getProducts.fulfilled,(state,action)=>{
          state.dataArray = action.payload;
          state.status = StatusCode.IDLE;
         })
         .addCase(getProducts.rejected,(state,action)=>{
            state.status =StatusCode.ERROR;

           })
    }
});

// Extract the action creators from the cart slice
export const { fetchProducts} = productSlice.actions;

// Export the reducer function
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get',async()=>{
    const data = await  fetch("https://fakestoreapi.com/products")
    const result =  await data.json();//data parsiong to json converting it to json

    return result;
})

// export function getProducts(){ // ui will call this we are not directly passing the api to component
//     return async function getProductsThunk(dispatch,state){
//       const data = await  fetch("https://fakestoreapi.com/products")
//       const result =  await data.json();//data parsiong to json converting it to json
//       console.log(result)
//       dispatch(fetchProducts(result)) //middle ware thunk will call this
    
//     }
// }
