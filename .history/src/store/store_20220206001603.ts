import { configureStore, ThunkAction, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk:false}).concat()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
