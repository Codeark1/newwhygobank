import { configureStore } from "@reduxjs/toolkit";
// import customerReducer from "./Features/Customer/CustomerSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Auth } from './Service';

const store = configureStore({
  reducer: {
    [Auth.reducerPath]: Auth.reducer,
    // customer: customerReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(Auth.middleware),
});
setupListeners(store.dispatch);

export default store;
