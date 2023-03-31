import { configureStore } from 'redux-toolkit';
import userReducer from '../features/user/userSlice';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
// import reduxLogger from 'redux-logger';

// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },
  // middleware : ( getDefaultMiddleware ) => getDefaultMiddleware().concat(logger)
});

export default store;