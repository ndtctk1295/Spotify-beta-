import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import Avatar from "../../Components/Avatar";
import Button from "../../Components/Button";
import LogOutButton from "../../Components/LogoutButton";
import { getAuth } from "firebase/auth";
import { auth } from "../../Configs/Authentication-Firebase/authentication";
import GetAuthen from "../../utils/getAuthen";
const MainSide = () => {
  //   const [loginStatus, setLoginStatus] = useState({});
  //   //   useEffect(() => {
  //   //     const isLogedIn = JSON.parse(localStorage.getItem("loginStatus"));
  //   //     if (isLogedIn) {
  //   //       setLoginStatus(isLogedIn);
  //   //       console.log(isLogedIn);
  //   //     }
  //   //   }, []);
  //   //   const a = JSON.parse(localStorage.getItem("loginStatus"));
  //   //   console.log(a);
  //   //   useEffect(() => {
  //   //     setLoginStatus(auth.currentUser);
  //   //     console.log(auth.currentUser);
  //   //     console.log(loginStatus);
  //   //   }, [setLoginStatus]);
  //   //   useEffect(() => {
  //   //     localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
  //   //   }, [loginStatus]);
  //   useEffect(() => {
  //     setLoginStatus(auth.currentUser);
  //     localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
  //   });
  const isLoggedIn = localStorage.getItem("userId");

  return (
    <div>
      <div
        className="button"
        style={{
          display: "flex",
          color: "white",
          marginLeft: "84%",
          marginTop: "2%",
        }}
      >
        {isLoggedIn !== null ? <LogOutButton /> : <Button />}
      </div>
      <div className="avatar">
        <Avatar />
      </div>
      {/* <button onClick={checkLogin} style={{ background: "red" }} /> */}
    </div>
  );
};
export default MainSide;
