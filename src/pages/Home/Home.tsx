import React from 'react';
import {Outlet} from "react-router-dom";
const  Home : React.FC = () => { 
  return (
    <div>
      <h1>Hello, React.js!</h1>
      <Outlet/>
    </div>
  );
}

export default Home