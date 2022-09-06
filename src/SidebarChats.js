import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebaseapp";
import "./sidebar.css";

function SidebarChats({ id, name,addnewchat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat=()=>{
    const room = prompt("please enter room name")
    if(room)
    {
        db.collection("rooms").add({
            name:room
        })
    }
  }

  return !addnewchat ? (
    <Link to={`/room/${id}`}>
    <div className="sidebar__chat">
      <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />
      <div className="sidebar__chatInfo">
        <h2>{name}</h2>
        <p>last message...</p>
      </div>
    </div>
    </Link>
  ) : (
    <div className="sidebar__chat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChats;
