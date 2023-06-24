import { SignInContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Login from './Login'

const Navbar = () => {

    const handleLogout = ()=>{
        localStorage.removeItem('Email')
        window.location.reload()
    }
    const {User} = useContext(SignInContext)
    return (
    <>
    {User === null ?
        <Login/>
        :
            <div className='navbar bg-neutral text-neutral-content'>
                <div className="containerWrap flex justify-between ">
                    <a className="btn btn-ghost normal-case text-xl">Instant Chat</a>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/Chatroom"}>Chats</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
            }
    </>
    )
}

export default Navbar