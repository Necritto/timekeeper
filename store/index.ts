import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";
import { RootState } from "store/types";

const logger = createLogger({
  collapsed: true,
  colors: {
    title: () => "#6FB3D2",
    prevState: () => "#9E9E9E",
    action: () => "#03A9F4",
    nextState: () => "#4CAF50",
    error: () => "#F20404",
  },
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== "production") {
      return getDefaultMiddleware().concat(logger);
    }
    return getDefaultMiddleware();
  },
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => typeof store.dispatch = useDispatch;

export default store;
