import Chatbox from "../components/Chatbox"
import SendMessage from "../components/SendMessage"
import { Link } from "react-router-dom"

const Chatroom = () => {
  return (
    <div>
        <Link to='/'>Go home</Link>
        <Chatbox/>
        <SendMessage/>
    </div>
  )
}

export default Chatroom