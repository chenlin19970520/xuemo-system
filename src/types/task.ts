import { TaskStatus } from "@/enum/task";


export interface dayTaskState {
    title: string, // 标题
    integral: number, // 积分
    status: TaskStatus, // 状态
}

export interface dayTaskListState {
    value: dayTaskState[]
}