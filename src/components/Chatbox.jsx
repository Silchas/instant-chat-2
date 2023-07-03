import { useEffect, useState } from "react";
import Message from "./Message"
import { collection, query, onSnapshot, orderBy, limit} from "firebase/firestore";
import { db, auth } from "./Firebase";

const Chatbox = () => {
const [messages, setMessages] = useState([])


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
    <div className='pb-44 pt-20 containerWrap'>
      {messages.map(message =>(
        <Message key={messages.id} message={message}/>
      ))}
    </div>
  )
}

export default Chatbox