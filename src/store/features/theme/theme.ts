import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Theme } from "@/types/theme";


const initialState: Theme = {
    name: "blue",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        updateTheme: (state, action: PayloadAction<Theme>) => {
            state = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateTheme, (state, action) => {
            state = action.payload;
        });
    },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
