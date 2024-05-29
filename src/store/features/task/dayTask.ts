import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

import type { DayTaskState, DayTaskListState } from "@/types/task";

const initialState: DayTaskListState = {
    value: [
        {
            title: "今日喝水4~5杯！",
            integral: 1,
            status: 0
        },
        {
            title: "今日睡觉时间不超过12:30!",
            integral: 1,
            status: 1
        },
        {
            title: "今日完成5分钟腹肌训练!",
            integral: 1,
            status: 2
        }
    ],
}

export const dayTaskSlice = createSlice({
    name: "dayTask",
    initialState,
    reducers: {
        updateDayTask: (state, action: PayloadAction<DayTaskState[]>) => {
            state.value = action.payload
        }
    },
})
export const { updateDayTask } = dayTaskSlice.actions;

export default dayTaskSlice.reducer;