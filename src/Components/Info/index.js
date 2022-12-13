import React, {useState} from 'react';
import "./style.css"
import {AiFillPlayCircle} from  "react-icons/ai"
import ArtistList from "../List/ArtistList"
// import FollowingList from "../List/FollowingList"
import styled from "styled-components"

let FollowingList = []
const Info = () => {
    let artistName = localStorage.getItem("artistName")
    
    let artist = ArtistList.find(
        o => JSON.stringify(o.name)===artistName)
    const Follow = (event) => {
        event.preventDefault()
        FollowingList.push(artist.name)
        localStorage.setItem("name", JSON.stringify(FollowingList))
        // FollowingList = JSON.parse(localStorage.getItem("name"))
    }
    if (localStorage.getItem("name")) {
        FollowingList = JSON.parse(localStorage.getItem("name"));
        // console.log(FollowingList)
    }
    

        return(
        <div className="info">
            
            <div>
                <div className="header">
                    <img src={artist.picture} alt={artist.name} style={{marginLeft: "5%", height:"200px", width:"200px"}}/>
                    <h1 style={{color: "white", marginLeft: "3%", marginTop: "5%", fontSize:"80px"}}>{artist.name}</h1>
                </div>  
            </div>

            <div className="taskbar" style={{height: 70}}>
                <AiFillPlayCircle className="raise" style={{color: "white", marginLeft:"5%"}}/>
                <button className="follow" style={{margin:0, padding: 0, height: 62, width:120, marginLeft: 10}} onClick={Follow}>Follow</button>
            </div>
                    
            <div>
                    {artist.songList.map((song) => (
                        <div className="song-list"> 
                            <li className="song" style={{display: "flex", flexDirection:"row", width: 1050}}>
                                <h4 style={{marginLeft: 5, width: 10, height: 10}}>{song.id}</h4>
                                <img src={song.image} alt={song.name} style={{marginLeft: 20, marginTop:5, height: 50, width: 50}}/>
                                <h4 style={{marginLeft: 40, width: 900 }}>{song.name}</h4>
                                <h4>...</h4>
                        </li>
                    </div>
                    ))}
            </div>
           
        </div>
    )
} 
export default Info;