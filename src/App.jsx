
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Navbar/>
      <Link to='/chatroom'>Go to Chat Room</Link>
    </div>
  )
}

export default App
