import Chatbox from "../components/Chatbox"
import SendMessage from "../components/SendMessage"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons"

const Chatroom = () => {
  const home = <FontAwesomeIcon icon={faHome} />
  return (
    <div>
        <Link to='/'>{home}</Link>
        <Chatbox/>
        <SendMessage/>
    </div>
  )
}

export default Chatroom