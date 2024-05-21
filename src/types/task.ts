import { TaskStatus } from "@/enum/task";


export interface dayTaskState {
    title: string,
    integral: number,
    status: TaskStatus,
}

export interface dayTaskListState {
    value: dayTaskState[]
}