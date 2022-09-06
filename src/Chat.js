import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import "./chat.css";
import { useParams } from "react-router-dom";
import db from "./firebaseapp";

function Chat() {
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot(snapshot => {
          setRoomName(snapshot.data().name);
        });
    }
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>last seen...</p>
        </div>
        <div className="header__right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message chat__reciever">
          <span className="chat__name">Rahul Kumar</span>
          This is test message
          <span className="chat__time">11:30 AM</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Bunty Kumar</span>
          This is test2 message
          <span className="chat__time">11:30 AM</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Rahul Kumar</span>
          This is test3 message
          <span className="chat__time">11:30 AM</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <AttachFileIcon />
        <form>
          <input type="text" placeholder="Type your message" />
          <input type="submit" />
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
