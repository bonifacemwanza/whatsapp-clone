import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import "./Chat.css";
import db from './firebase';



function Chat() {
    const [input, setInput] = useState("");
    const [seed,setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    useEffect(() => {
       if(roomId){
           db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
               setRoomName(snapshot.data().name)
           ))
       }

    },[roomId]);
    const  sendMessage = (e) => {
        e.preventDefault();
        console.log("you type >> ", input);
        setInput("");
    
    }

    return (
        <div className="chat">
            <div className="chat_header">
                 <Avatar />
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>last seen</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton> 
                    <IconButton>
                        <AttachFile />
                    </IconButton> 
                    <IconButton>
                        <MoreVert />
                    </IconButton> 

                </div>
            </div>
            <div className="chat_body">
                 <p className={`chat_message ${true && "chat_receiver"} `}> <span className="chat_name"> boni</span> hey guys  <span className="chat_timestamp">3:15pm</span> </p>
                
            </div>
            <div className="chat_footer">
                <InsertEmoticon />
                <form><input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" /><button onClick={sendMessage} type="submit">Send a Message</button></form>
                <Mic />
            
            </div>
        </div>
    )
}

export default Chat;
