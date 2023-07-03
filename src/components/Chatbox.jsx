import { useEffect, useState, useContext } from "react";
import Message from "./Message"
import { collection, query, onSnapshot, orderBy, limit} from "firebase/firestore";
import { db, auth } from "./Firebase";
import { ScrollContext } from "../context/ScrollContext";

const Chatbox = () => {
const [messages, setMessages] = useState([])
const { lastMessageRef} = useContext(ScrollContext)


useEffect(() =>{
  const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const messages = [];
  querySnapshot.forEach((doc) => {
      messages.push({...doc.data(), id:doc.id});
  });
  setMessages(messages)
});
return () => unsubscribe
}, [])


return (
  <div className="pb-44 pt-20 containerWrap">
    {messages.map((message, index) => {
      const isLastMessage = index === messages.length - 1;
      return (
        <Message
          key={message.id}
          message={message}
          lastMessageRef={lastMessageRef}
          isLastMessage={isLastMessage}
        />
      );
    })}
  </div>
);
}

export default Chatbox