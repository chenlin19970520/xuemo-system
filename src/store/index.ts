import { configureStore } from "@reduxjs/toolkit";
import dayTaskReducer from "./features/task/dayTask";
import themeReducer from "./features/theme/theme";
export const store = configureStore({
    reducer: {
        dayTask: dayTaskReducer,
        theme: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch