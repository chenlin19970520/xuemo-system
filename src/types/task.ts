import { TaskStatus } from "@/enum/task";

/**
 * @param title 标题
 * @param integral 积分
 * @param status 状态
 */
export interface DayTaskState {
    title: string, 
    integral: number, 
    status: TaskStatus,
}

export interface DayTaskListState  {
    value: DayTaskState[]
}