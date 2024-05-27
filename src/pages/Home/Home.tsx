import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store";
import { updateDayTask } from "@/store/features/task/dayTask";
import HomeBackground from "./HomeBackground";
const Home: React.FC = () => {
  const dayTaskList = useSelector((state: RootState) => state.dayTask.value);
  const dispatch = useDispatch();

  return (
    <HomeBackground>
      <h1
        onClick={() => {
          dispatch(
            updateDayTask([
              {
                title: "测试任务",
                integral: 1,
                status: 0,
              },
            ])
          );
        }}
      >
        Hello, React.js!
      </h1>
      <h2>{dayTaskList[0].title}</h2>
      <Outlet />
    </HomeBackground>
  );
};

export default Home;
