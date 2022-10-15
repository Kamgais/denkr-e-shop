import {configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import warenkorbList from "./reducers/Warenkorbreducer";

const store = createStore(
     warenkorbList
  )

  export default store;
