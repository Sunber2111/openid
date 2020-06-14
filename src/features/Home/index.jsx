import React from "react";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Infomation from "./components/Infomation";
const Home = () => {
  const { isShow } = useSelector((s) => s.home);

  return (
    <div className="d-flex justify-content-center align-items-center App">
      {!isShow ? <Login /> : <Infomation />}
    </div>
  );
};

export default Home;
