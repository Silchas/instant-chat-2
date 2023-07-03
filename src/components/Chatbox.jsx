import { useEffect, useState, useContext } from "react";
import Message from "./Message"
import { collection, query, onSnapshot, orderBy, limit} from "firebase/firestore";
import { db, auth } from "./Firebase";
import { ScrollContext } from "../context/ScrollContext";
import { Link } from "react-router-dom"

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
  <>
  <div className="navbar bg-base-100 bg-orange-600 flex flex-row sticky top-0 z-10 space-x-9">
  <a className="btn btn-ghost normal-case text-3xl ">Instant Chat</a>
  <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6 content-center space-x-9">
  <li>
    <Link to='/'>
    <a className="tooltip" data-tip="Home">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
    </Link>
  </li>
  <li>
    <a className="tooltip" data-tip="Details">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a className="tooltip" data-tip="Stats">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>
</div>
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
  </>
);
}

export default Chatbox