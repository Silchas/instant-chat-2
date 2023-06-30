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
            <div className="hero min-h-screen bg-base-200 flex items-center justify-center bg-lime-950">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold tracking-widest text-xl text-orange-500">Instant Chat</h1>
                        <p className="py-6">
                        <Link to={"/Chatroom"}><a className="btn btn-ghost normal-case text-xl">Chats</a></Link>
                        <button onClick={handleLogout} className="btn btn-ghost normal-case text-xl">Logout</button>
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