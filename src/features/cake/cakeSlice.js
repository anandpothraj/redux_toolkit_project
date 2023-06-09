import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name : 'cake',
    initialState,
    reducers : {
        orderCake : ( state ) => {
            state.numOfCakes--
        },
        restockCake : ( state, action ) => {
            state.numOfCakes += parseInt(action.payload)
        }
    }
});

export default cakeSlice.reducer;
export const { orderCake, restockCake } = cakeSlice.actions;