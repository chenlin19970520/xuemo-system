import React from "react";
import { Outlet } from "react-router-dom";
import HomeBackground from "./HomeBackground";
import DayTaskList from "./components/DayTask.tsx";
import UserInfo from "./components/UserInfo.tsx";
import homeCss from "./Home.module.css";

const Home: React.FC = () => {
  // 1、get请求
  fetch("/api/v1/user?name=陈林", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });

  // fetch("/api/v1/cats", {
  //   method: "GET",
  //   // body: JSON.stringify({
  //   //   name: "陈林",
  //   //   age: 100,
  //   //   breed: "测试",
  //   // }),
  //   // headers: {
  //   //   "Content-Type": "application/json",
  //   // },
  // }).then((res) => {
  //   return res.json();
  // }).then(res=>{
  //   console.log(res)
  // })
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
