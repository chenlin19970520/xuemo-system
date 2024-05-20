import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

/**
 * @param INCOMPLETE 未完成
 * @param COMPLETED 已完成
 * @param EXPIRED 已过期
 * @param REOPEN 重新开始
 */
export enum TaskStatus {
    INCOMPLETE = 0,
    COMPLETED = 1,
    EXPIRED = 2,
    REOPEN = 3,
}

export interface dayTaskState {
    title: string,
    integral: number,
    status: TaskStatus,
}
export interface dayTaskListState {
    value: dayTaskState[]
}
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