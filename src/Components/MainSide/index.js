import React from 'react';
import "./style.css"
import Avatar from "../../Components/Avatar"
import Button from "../../Components/Button"



const MainSide = () => {
    return(
    
            
                <div>
                    <div className="button" style={{display: "flex", color: "white", marginLeft: "84%", marginTop: "2%"}}>
                        <Button/>
                    </div>
                    <div className="avatar">
                        <Avatar/>
                    </div>
                </div>
            
         
        
        
    )
} 
export default MainSide;