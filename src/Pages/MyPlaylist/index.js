import React from "react"
import styled from "styled-components"
import MenuSide from "../../Components/MenuSide"
import Info from "../../Components/Info"
import Button from "../../Components/Button"
import MusicPlayer from "../../Components/MusicPlayer"
import Playlist from "../../Components/Playlist"
// import "./style.css"

const MyPlaylist = () => {
    const userId = localStorage.getItem("userId");
    const ButtonDisplay = styled.div`   
        button{
            display:none;
        };
    `;
    return(
        <div className="home">
            <div className="menu_side">
                <MenuSide/>
            </div>
            <div className="main_side">
                {userId != null && userId !=="" ? null : <div className="button" style={{display: "flex", color: "white", marginLeft: "84%", marginTop: "2%", marginBottom:"1%"}}>
                        <Button/>
                </div>}
                <Playlist/>   
            </div>
            <MusicPlayer/>
        </div>
    )    
}
export default MyPlaylist;