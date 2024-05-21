import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

import type { dayTaskState, dayTaskListState } from "@/types/task";

const initialState: dayTaskListState = {
    value: [
        {
            title: "默认任务",
            integral: 1,
            status: 0
        }
    ],
}

export const dayTaskSlice = createSlice({
    name: "dayTask",
    initialState,
    reducers: {
        updateDayTask: (state, action: PayloadAction<dayTaskState[]>) => {
            state.value = action.payload
        }
    },
})
export const { updateDayTask } = dayTaskSlice.actions;

export default dayTaskSlice.reducer;