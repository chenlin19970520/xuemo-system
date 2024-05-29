import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store";
import type { DayTaskState, DayTaskListState } from "@/types/task";
import dayTaskCss from "./DayTask.module.css";
import { TaskStatus, changeTaskStatus } from "@/enum/task";
import { updateDayTask } from "@/store/features/task/dayTask";

interface DayTastItemProps {
  value: DayTaskState;
}

const DayTastItem: React.FC<DayTastItemProps> = ({ value }) => {
  const { title, integral, status } = value;
  return (
    <div className={`${dayTaskCss.dayTask_item}`}>
      <div className={dayTaskCss.dayTask_title}>{title}</div>
      <div className="flex-between">
        <div className={`task-status_${TaskStatus[status]}`}>
          {changeTaskStatus(status)}
        </div>
        <div>{integral}</div>
      </div>
    </div>
  );
};

const DayTaskList: React.FC = () => {
  const dayTaskList: DayTaskListState = useSelector((state: RootState) => {
    return state.dayTask;
  });
  const disPatch = useDispatch();
  const handeClick = () => {
    disPatch(
      updateDayTask([
        {
          title: "测试任务",
          integral: 1,
          status: 3,
        },
      ])
    );
  };
  return (
    <div className={dayTaskCss.dayTast_list}>
      <button onClick={handeClick}>点击</button>
      {dayTaskList.value.map((item: DayTaskState, index: number) => {
        return <DayTastItem value={item} key={index} />;
      })}
    </div>
  );
};

export default DayTaskList;
