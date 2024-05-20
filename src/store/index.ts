import { configureStore } from "@reduxjs/toolkit";
import dayTaskReducer from "./features/task/dayTask";
export const store = configureStore({
    reducer: {
        dayTask: dayTaskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch