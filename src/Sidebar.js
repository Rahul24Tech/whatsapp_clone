import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import "./sidebar.css"
import SidebarChats from "./SidebarChats";
import db from "./firebaseapp";

function Sidebar() {
  const [rooms,setRooms]=useState([])
  useEffect(()=>{
    db.collection("rooms").onSnapshot(snapshot=>{
      setRooms(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  })
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
              <SearchIcon/>
              <input type="text" placeholder="start a new search"/>
        </div>
      </div>
      <div className="sidebar__Chats">
        <SidebarChats addnewchat/>
        {
          rooms.map(room=>{
            return <SidebarChats key={room.id} id={room.id} name={room.data.name}/>
          })
        }
      </div>
    </div>
  );
}

export default Sidebar;
