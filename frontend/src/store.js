import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from './features/productSlice';
import userSlice from './features/userSlice';
import appApi from './services/appApi';
import thunk from "redux-thunk";

//reducers
const reducer = combineReducers({
    user: userSlice,
    products: productSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blackList: [appApi.reducerPath, "products"],
};

// Persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// Creating the store
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});

export default store;