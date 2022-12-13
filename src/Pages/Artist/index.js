import styled from "styled-components";
import MenuSide from "../../Components/MenuSide";
import Info from "../../Components/Info";
import Button from "../../Components/Button";
import MusicPlayer from "../../Components/MusicPlayer";
import updatePlaylist from "../../App";
import "./style.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import { ArtistList, AvatarList } from "./data";

const Artist = ({ updatePlaylist }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  let [FollowingList, setFollowingList] = useState([]);
  let artistId = localStorage.getItem("artistId");

  let artist = ArtistList.find((o) => JSON.stringify(o.id) === artistId);

  const Follow = (event) => {
    event.preventDefault();
    if (FollowingList.includes(artist.name)) {
      setFollowingList(FollowingList.filter((name) => name != artist.name));
    } else {
      setFollowingList([...FollowingList, artist.name]);
    }
  };
  useEffect(() => {
    const newFollowList = JSON.parse(localStorage.getItem("FollowList"));
    if (newFollowList) {
      setFollowingList(newFollowList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("FollowList", JSON.stringify(FollowingList));
  }, [FollowingList]);
  //   return (
  //     <div className="home">
  //       <div className="menu_side">
  //         <MenuSide />
  //       </div>
  //       <div className="main_side">
  //         {/* {userId != null && userId !=="" ? null : <div className="button" style={{display: "flex", color: "white", marginLeft: "84%", marginTop: "2%", marginBottom:"1%"}}>
  //                         <Button/>
  //                 </div>} */}
  //         <Info />
  //       </div>

  //     </div>
  //   );
  // };
  return (
    <div className="home" style={{ display: "flex" }}>
      <div className="menu_side">
        <div className="menu" style={{ overflow: "hidden" }}>
          <h1 className="app-name" style={{ marginTop: 20, marginBottom: 10 }}>
            <FaSpotify className="music-icon" /> Music
          </h1>
          <div className="side_content_1">
            <h4
              className="side_content-home"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              <AiFillHome className="content-icon" /> Home
            </h4>
            <h4 className="side_content-playlist">
              {" "}
              <RiPlayListFill className="content-icon" /> My Playlist
            </h4>
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
      </div>
      <div className="main_side">
        <div className="info">
          <div>
            <div className="header">
              <img
                src={artist.picture}
                alt={artist.name}
                style={{ marginLeft: "5%", height: "200px", width: "200px" }}
              />
              <h1
                style={{
                  color: "white",
                  marginLeft: "3%",
                  marginTop: "5%",
                  fontSize: "80px",
                }}
              >
                {artist.name}
              </h1>
            </div>
          </div>

          <div className="taskbar" style={{ height: 70 }}>
            <AiFillPlayCircle
              className="raise"
              style={{ color: "white", marginLeft: "5%" }}
              onClick={() =>
                artist.songList.map((song) =>
                  updatePlaylist(song.id, song.name, song.cover, song.musicSrc)
                )
              }
            />
            {FollowingList.includes(artist.name) ? (
              <button
                className="unfollow"
                // style={{
                //   margin: 0,
                //   padding: 0,
                //   height: 62,
                //   width: 120,
                //   marginLeft: 10,
                //   color: "black",
                //   background: "white",
                //   borderRadius: "20px"
                // }}
                onClick={Follow}
              >
                Unfollow
              </button>
            ) : (
              <button
                className="follow"
                style={{
                  margin: 0,
                  padding: 0,
                  height: 62,
                  width: 120,
                  marginLeft: 10,
                }}
                onClick={Follow}
              >
                Follow
              </button>
            )}
          </div>

          <div>
            {artist.songList.map((song) => (
              <div className="song-list">
                <li
                  className="song"
                  style={{ display: "flex", flexDirection: "row", width: 1050 }}
                  onClick={() =>
                    updatePlaylist(
                      song.id,
                      song.name,
                      song.cover,
                      song.musicSrc
                    )
                  }
                >
                  <h4 style={{ marginLeft: 5, width: 10, height: 10 }}>
                    {song.id}
                  </h4>
                  <img
                    src={song.cover}
                    alt={song.name}
                    style={{
                      marginLeft: 20,
                      marginTop: 5,
                      height: 50,
                      width: 50,
                    }}
                  />
                  <h4 style={{ marginLeft: 40, width: 900 }}>{song.name}</h4>
                  <h4>...</h4>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Artist;
