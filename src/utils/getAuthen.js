import { getAuth } from "firebase/auth";
import { auth } from "../Configs/Authentication-Firebase/authentication";
import { useState, useEffect } from "react";
const GetAuthen = () => {
  const [loginStatus, setLoginStatus] = useState({});
  useEffect(() => {
    setLoginStatus(JSON.parse(localStorage.getItem("loginStatus")));
  });
};
export default GetAuthen;
