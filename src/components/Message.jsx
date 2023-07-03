/* eslint-disable react/prop-types */
import { SignInContext } from "../context/AuthContext";
import { useContext } from "react";
import { auth } from "./Firebase";
import { doc, deleteDoc,getDoc } from "firebase/firestore";
import { db } from "./Firebase";

const Message = ({ message }) => {
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
  // Get a reference to the message document with the given ID
  const messageRef = doc(db, "messages", messageId);

  try {
    // Get the message document
    const messageDoc = await getDoc(messageRef);

    // Check if the user ID associated with the message matches the ID of the currently signed-in user
    if (messageDoc.data().userId === auth.currentUser.uid) {
      // Delete the message document
      await deleteDoc(messageRef);
    } else {
      // Display an error message indicating that they are not authorized to delete the message
      console.log("You are not authorized to delete this message.");
    }
  } catch (error) {
    // Handle errors retrieving the message document
    console.log("Error deleting message:", error);
  }
}
  // Format the time as desired
  const timestamp = `${hours}:${minutes}`;
  const messageClass = message.uid === auth.currentUser.email ? "chat-end" : "chat-start";

  return (
      <div>
          <div className= {`chat ${messageClass}`}>
              <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                      <img src={message.avatar} />
                  </div>
              </div>
              <div className="chat-header">
                  {message.name}
              </div>
              <div className="chat-bubble chat-bubble-accent">{message.text}</div>
              <div>{timestamp}<button onClick={() => deleteMessage(message.id)} className="btn-sm">Delete</button></div> {/* Display only the time */}
          </div>
      </div>
  );
};

export default Message;