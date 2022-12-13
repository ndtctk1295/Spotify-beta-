import React from "react";
import "./style.css";
import { logout } from "../../Configs/Authentication-Firebase/authentication";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();
  const LogOut = () => {
    logout();
    localStorage.removeItem("userId");

    window.location.reload();
  };
  return (
    <div>
      <div className="button-off">
        <button className="logout" onClick={LogOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default LogOutButton;
