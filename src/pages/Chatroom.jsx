import Chatbox from "../components/Chatbox"
import SendMessage from "../components/SendMessage"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome } from "@fortawesome/free-solid-svg-icons"

const Chatroom = () => {
  // const home = <FontAwesomeIcon icon={faHome} />
  return (
    <div>
        <Chatbox/>
        <SendMessage/>
    </div>
  )
}

export default Chatroom