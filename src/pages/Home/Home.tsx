import React from "react";
import { Outlet } from "react-router-dom";
import HomeBackground from "./HomeBackground";
import DayTaskList from "./components/DayTask.tsx";
import UserInfo from "./components/UserInfo.tsx"
import homeCss from "./Home.module.css";
const Home: React.FC = () => {
  return (
    <HomeBackground>
      <div className={homeCss.home_body}>
        <div className="flex-between">
          <DayTaskList />
          <UserInfo />
        </div>
      </div>
      <Outlet />
    </HomeBackground>
  );
};

export default Home;
