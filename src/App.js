import {Routes, Route, Outlet, Navigate} from "react-router-dom"
import './App.css';
import styled from "styled-components"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Artist from "./Pages/Artist"
import MyPlaylist from "./Pages/MyPlaylist"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/artist" element={<Artist/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/artist" element={<Artist/>}/>
          <Route path="/myplaylist" element={<MyPlaylist/>}/>
        </Route>
      </Routes>
      {/* <Artist/> */}
      {/* <MyPlaylist/> */}
    </div>
  );
}


const PrivateRoute = () => {
  const userId = localStorage.getItem("userId");
  return userId !== null && userId !== "" ? <Outlet/> : <Navigate to= "/"/>
}


export default App;
