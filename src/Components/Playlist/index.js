import React from 'react';
// import "./style.css"
import {AiFillPlayCircle} from  "react-icons/ai"
import ArtistList from "../List/ArtistList"


const Playlist = () => {
    let artistId = localStorage.getItem("artistId")
    let artist = ArtistList.find(o => JSON.stringify(o.id)===artistId)
    console.log(artist);
    return(
        <div className="info">
            
            <div>
                <div className="header">
                    <img src="https://i.pinimg.com/originals/ea/70/75/ea707569ecc64bb0cf6c5165f8a9b392.jpg" alt="My Playlist" style={{marginLeft: "5%", height:"200px", width:"200px"}}/>
                    <h1 style={{color: "white", marginLeft: "3%", marginTop: "5%", fontSize:"80px"}}>My Playlist</h1>
                </div>  
            </div>

            <div className="taskbar" style={{height: 70}}>
                <AiFillPlayCircle className="raise" style={{color: "white", marginLeft:"5%"}}/>
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
export default Playlist;