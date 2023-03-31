import { createSlice } from 'redux-toolkit';

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
            state.numOfIcecreams += action.payload
        }
    }
});

export default icecreamSlice.reducer;
export const icecreamActions = icecreamSlice.actions;