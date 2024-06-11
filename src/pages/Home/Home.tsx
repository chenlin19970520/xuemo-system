import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HomeBackground from "./HomeBackground";
import DayTaskList from "./components/DayTask.tsx";
import UserInfo from "./components/UserInfo.tsx";
import homeCss from "./Home.module.css";

const Home: React.FC = () => {
  // 1、get请求
  // fetch("/api/v1/user?name=陈林", {
  //   method: "GET",
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   });
  //2、post请求
  // fetch("/api/v1/user", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     name: "陈林",
  //     age: 100,
  //     breed: "测试",
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((res) => {
  //   return res.json();
  // }).then(res=>{
  //   console.log(res)
  // })

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    code: "",
  });

  const [codeRandom, setCodeRandom] = useState(0);

  const imgUrl = `http://localhost:3000/user/code?time=${codeRandom}`;

  useEffect(() => {}, []);

  const handleLogin = () => {
    console.log(userInfo);

    fetch("/api/v1/user/add", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    fetch("/api/v1/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <HomeBackground>
      <div className={homeCss.home_body}>
        <div className="flex-between">
          <DayTaskList />
          <UserInfo />
        </div>
        <div className="flex-column">
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
            placeholder="请输入用户名"
          />
          <input
            type="text"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            placeholder="请输入密码"
          />

          <input
            type="text"
            name="code"
            value={userInfo.code}
            onChange={handleChange}
            placeholder="请输入验证码"
          />
          <img
            style={{
              width: "100px",
            }}
            onClick={() => {
              setCodeRandom((state) => state + 1);
            }}
            src={imgUrl}
            alt=""
          />
          <button onClick={handleLogin}>提交</button>

          <input type="file" name="file" onChange={handleUpload} />
        </div>
      </div>
      <Outlet />
    </HomeBackground>
  );
};

export default Home;
