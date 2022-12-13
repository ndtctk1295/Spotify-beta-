import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "./App.css";
import styled from "styled-components";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Artist from "./Pages/Artist";
import MyPlaylist from "./Pages/MyPlaylist";
import React, { useEffect, useState } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

function App() {
  const artistName = localStorage.getItem("artistName");
  const [audioLists, setAudioList] = useState([]);
  const options = {
    defaultPosition: {
      top: 0,
      right: 100,
      bottom: 120,
      left: 0,
    },
    mode: "full",
    autoPlay: true,
  };
  function updatePlaylist(newid, newname, newcover, newmusicSrc) {
    if (audioLists.some((e) => e.name === newname)) {
    } else {
      audioLists.push({
        id: newid,
        name: newname,
        cover: newcover,
        musicSrc: newmusicSrc,
      });
      localStorage.setItem("ListenList", JSON.stringify(audioLists));
    }
    window.location.reload();
  }
  useEffect(() => {
    const newlisteningList = JSON.parse(localStorage.getItem("ListenList"));
    if (newlisteningList) {
      setAudioList(newlisteningList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ListenList", JSON.stringify(audioLists));
  }, [audioLists]);
  return (
    <div className="App">
      <ReactJkMusicPlayer
        audioLists={audioLists}
        showMediaSession
        options={options}
        mode="full"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/artist"
          element={<Artist updatePlaylist={updatePlaylist} />}
        />
        {/* <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/artist" element={<Artist/>}/>
          <Route path="/myplaylist" element={<MyPlaylist/>}/>
        </Route> */}
      </Routes>
      {/* <Artist/> */}
      {/* <MyPlaylist/> */}
    </div>
  );
}
// const auth = getAuth();
// const isLoggedIn = setTimeout(auth.currentUser, 1000);
// console.log(isLoggedIn);

// const PrivateRoute = () => {
//   // const userId = localStorage.getItem("userId");
//   // return userId !== null && userId !== "" ? <Outlet /> : <Navigate to="/" />;

// };

export default App;
