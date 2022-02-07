import { configureStore, ThunkAction, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
