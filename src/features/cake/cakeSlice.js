import { createSlice } from 'redux-toolkit';

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
            state.numOfCakes += action.payload
        }
    }
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;