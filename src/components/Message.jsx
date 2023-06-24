import { SignInContext } from "../context/AuthContext";
import { useContext } from "react";

const Message = ({ message }) => {
const {User, uid} = useContext(SignInContext)

  // Convert the createdAt Timestamp to a Date object
  const createdAtDate = message.createdAt ? message.createdAt.toDate() : new Date()

  // Extract the time components from the Date object
  let hours = createdAtDate.getHours();
  let minutes = createdAtDate.getMinutes();

  // Add a leading zero if the value of minutes is less than 10
if (minutes < 10) {
  minutes = `0${minutes}`;
}

  // Format the time as desired
  const timestamp = `${hours}:${minutes}`;

  return (
      <div>
          <div className= {`chat ${message.uid === User.uid ? "chat-end" : "chat-start"}`}>
              <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                      <img src={message.avatar} />
                  </div>
              </div>
              <div className="chat-header">
                  {message.name}
              </div>
              <div className="chat-bubble">{message.text}</div>
              <div>{timestamp}</div> {/* Display only the time */}
          </div>
      </div>
  );
};

export default Message;