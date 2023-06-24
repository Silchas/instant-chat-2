import Chatbox from "../components/Chatbox"
import SendMessage from "../components/SendMessage"
import Navbar from "../components/Navbar"

const Chatroom = () => {
  return (
    <div>
        <Navbar/>
        <Chatbox/>
        <SendMessage/>
    </div>
  )
}

export default Chatroom