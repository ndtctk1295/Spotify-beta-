import "./style.css"
import {AiFillPlayCircle} from  "react-icons/ai"
import {useNavigate} from "react-router-dom"
import AvatarList from "../List/AvatarList"
const Avatar = () => {
    const navigate = useNavigate();
    const ChangeMainSide = (event) => {
        navigate("/artist");
        console.log(event.currentTarget.id)
        localStorage.setItem("artistId", JSON.stringify(event.currentTarget.id))
    }
    
    return(
        <div>
            <h1 className="avatar-title">Artists</h1>
            <div className="avatars"  style={{display: "flex", flexDirection:"row", flexWrap: "wrap"}}>
        
                {AvatarList.map((avatar) => (
                    <li className="avatar-list" style={{display: "flex", flexDirection:"column", position:"relative", alignItems:"center", justifyContent:"center"}} id={avatar.id} onClick={ChangeMainSide}>
                        <img src={avatar.image} alt={avatar.name} className="profile-picture"></img>
                        <AiFillPlayCircle className="play-icon" style={{position:"absolute", fontSize:"40px", cursor:"pointer", marginBottom: "20%", transition: ".3s"}}/>
                        <h4>{avatar.name}</h4>
                    </li>
                ))}

            </div>
        </div>
    )
}

export default Avatar;