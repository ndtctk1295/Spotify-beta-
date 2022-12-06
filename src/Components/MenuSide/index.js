import React, { useEffect } from 'react';
import "./style.css"
import styled from "styled-components"
import {FaSpotify} from  "react-icons/fa"
import {AiFillHome} from  "react-icons/ai"
import {RiPlayListFill} from  "react-icons/ri"
import {useNavigate} from "react-router-dom"
import FollowingList from "../List/FollowingList"
import ArtistList from "../List/ArtistList"
import AvatarList from "../List/AvatarList"
const MenuSide = () => {
    const navigate = useNavigate()
    const ChangeMainSide = (event) => {
        navigate("/artist");
        console.log(event.currentTarget.id);
        localStorage.setItem("followingId", JSON.stringify(event.currentTarget.id))
    }


    const FollowingList = JSON.parse(localStorage.getItem("name"));
    console.log(FollowingList)
    
    return(

           
        <div className="menu" style={{overflow: "hidden"}}>
            <h1 className="app-name" style={{marginTop: 20, marginBottom: 10}}><FaSpotify className="music-icon"/> Music</h1>
            <div className="side_content_1">
                    <h4 className="side_content-home" onClick={() => {navigate("/")}}> <AiFillHome className="content-icon"/> Home</h4>
                    <h4 className="side_content-playlist" onClick={() => {navigate("/myplaylist")}}> <RiPlayListFill className="content-icon"/> My Playlist</h4>
            </div>
            <div className="side_content_2">
                    <h1 style={{width: 300, height: 40, marginBottom:0}}>Following Artists</h1>
                    <div>
                        {FollowingList.map((following) => (
                            <li onClick={ChangeMainSide} id={following} style={{visibility: "visible"}}>{following}</li>
                        ))}
                    </div>
            </div>
        </div>
    )        
}    
        
export default MenuSide;