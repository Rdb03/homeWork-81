import {configureStore} from "@reduxjs/toolkit";
import {linkReducer} from "./linkSlice.ts";


export const store = configureStore({
    reducer: {
        link: linkReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;