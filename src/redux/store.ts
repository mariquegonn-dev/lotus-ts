import { configureStore } from "@reduxjs/toolkit";
import sliceSteps from "./sliceSteps";

const store = configureStore({
  reducer: {
    steps: sliceSteps,
  },
});

export default store;
