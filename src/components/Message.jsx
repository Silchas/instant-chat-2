/* eslint-disable react/prop-types */
import { SignInContext } from "../context/AuthContext";
import { useContext } from "react";
import { auth } from "./Firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./Firebase";

const Message = ({ message, lastMessage, isLastMessage }) => {
const {User} = useContext(SignInContext)

  // Convert the createdAt Timestamp to a Date object
  const createdAtDate = message.createdAt ? message.createdAt.toDate() : new Date()

  // Extract the time components from the Date object
  let hours = createdAtDate.getHours();
  let minutes = createdAtDate.getMinutes();

  // Add a leading zero if the value of minutes is less than 10
if (minutes < 10) {
  minutes = `0${minutes}`;
}

const deleteMessage = async (messageId) => {
  // Check if the current user is the sender of the message
  if (message.uid === auth.currentUser.email) {
    // Get a reference to the message document with the given ID
    const messageRef = doc(db, "messages", messageId);

    // Delete the message document
    await deleteDoc(messageRef);
  } else {
    // The current user is not the sender of the message
    console.log("You can only delete messages that you have sent.");
  }
}

  // Format the time as desired
  const timestamp = `${hours}:${minutes}`;
  const messageClass = message.uid === auth.currentUser.email ? "chat-end" : "chat-start";

  return (
    <div ref={isLastMessage ? lastMessage : null}>
      <div className={`chat ${messageClass}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble chat-bubble-accent">{message.text}</div>
        <div>
          {timestamp}
          {message.uid === auth.currentUser.email && (
            <button onClick={() => deleteMessage(message.id)} className="btn-sm">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Message;