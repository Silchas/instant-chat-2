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
        <>
            <div className="hero min-h-screen bg-base-200 flex flex-col items-center justify-center bg-lime-950">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <img src='/public/2+LETS+CHAT+BANNER+SIZE.jpg' alt=''/>
                        <h1 className="text-6xl font-bold tracking-widest text-orange-500">Instant Chat</h1>
                        <p className="py-6">
                            <p>Join the conversation, meet new people and make connections in one shared platform.</p>
                        <Link to={"/Chatroom"}><a className="btn btn-ghost normal-case text-xl text-emerald-400">Chats</a></Link>
                        <button onClick={handleLogout} className="btn btn-ghost normal-case text-xl text-emerald-400">Logout</button>
                        </p>
                    </div>
                </div>
            </div>
        </>
            }
    </>
    )
}

export default Navbar