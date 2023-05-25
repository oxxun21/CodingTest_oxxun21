import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from 'redux';
import rootReducer from "./modules";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from './modules/goodsCounter';
import stockReducer from './modules/stockCounter';

// const store = createStore(rootReducer);
// 1. index.js 에서 combine 해주던 것을 여기서 가능
// 2. thunk, composeWithDevTools 등 필요한 것들을 추가해주어야 했던 것들 X
const store = configureStore({
  reducer: {
    goodsReducer,
    stockReducer
  },
})
console.log(store.getState());

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
