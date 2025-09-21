import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import { combineReducers, configureStore } from "@reduxjs/toolkit";
  import authSlice from "./slices/auth";
  import storage from "redux-persist/lib/storage";
  
  const persistConfig = {
    key: "wealthSync",
    storage,
  };
  
  const rootReducer = combineReducers({
    auth: authSlice,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer as unknown as NonNullable<typeof rootReducer>,
    // devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  export const persistor = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  