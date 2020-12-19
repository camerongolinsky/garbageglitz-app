import { createSlice } from '@reduxjs/toolkit';
// import { PRODUCTS } from './products'

const slice = createSlice({
    name: 'products',
    initialState:{
        products: []
    },
    reducers:{
        addProducts: ( state , action )=> {
            state.products = action.payload
        }
    }
});

export const { addProducts } = slice.actions;

export const selectProducts = state => state.products.products;

export default slice.reducer;