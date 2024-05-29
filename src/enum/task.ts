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

/*
 * 根据状态返回对应的文字
 * @param status 枚举值
 * @returns 
 */
export const changeTaskStatus = (status: TaskStatus) => {
    switch (status) {
        case TaskStatus.INCOMPLETE:
            return '未完成'
        case TaskStatus.COMPLETED:
            return '已完成'
        case TaskStatus.EXPIRED:
            return '已过期'
        case TaskStatus.REOPEN:
            return '重新开始'
    }
}