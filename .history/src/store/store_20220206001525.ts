import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
export const store = configureStore({
  reducer: rootReducer,
  middleware: getdefault
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
