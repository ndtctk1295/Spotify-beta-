import { React, useState, useEffect } from "react";
import styled from "styled-components";
import MenuSide from "../../Components/MenuSide";
import MainSide from "../../Components/MainSide";
import MusicPlayer from "../../Components/MusicPlayer";
import { FaSpotify } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate, Routes, Route, Link } from "react-router-dom";

import { ArtistList, AvatarList } from "../Artist/data";

import "./style.css";

const Home = () => {
  let [FollowingList, setFollowingList] = useState([]);

  useEffect(() => {
    const newFollowList = JSON.parse(localStorage.getItem("FollowList"));
    if (newFollowList) {
      setFollowingList(newFollowList);
    }
  }, []);
  // return(
  //     <div className="home">
  //         <div className="menu_side">
  //             <MenuSide/>
  //         </div>
  //         <div className="main_side">
  //             <MainSide/>
  //         </div>
  //         <MusicPlayer/>
  //     </div>
  // )
  return (
    <div className="home" style={{ display: "flex" }}>
      <div className="menu_side">
        <div className="menu" style={{ overflow: "hidden" }}>
          <h1 className="app-name" style={{ marginTop: 20, marginBottom: 10 }}>
            <FaSpotify className="music-icon" /> Music
          </h1>
          <div className="side_content_1">
            <h4 className="side_content-home">
              
              
                <AiFillHome className="content-icon" />
                Home
            </h4>
            <h4 className="side_content-playlist">
              {" "}
              <RiPlayListFill className="content-icon" />
              My Playlist
            </h4>
          </div>
        </div>
        <div className="side_content_2">
          <h1 style={{ width: 300, height: 40, marginBottom: 0 }}>
            Following Artists
          </h1>
          <div>
            {FollowingList.map((following) => (
              <li id={following} style={{ visibility: "visible" }}>
                {following}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="main_side">
        <MainSide />
      </div>
    </div>
  );
};
export default Home;
