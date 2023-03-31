import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfIcecreams : 10
}

const icecreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        orderIcecream : ( state ) => {
            state.numOfIcecreams--
        },
        restockIcecream : (state, action) => {
            state.numOfIcecreams += parseInt(action.payload)
        }
    }
});

export default icecreamSlice.reducer;
export const { orderIcecream, restockIcecream } = icecreamSlice.actions;