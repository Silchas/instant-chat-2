import { useContext } from "react";
import { SignInContext } from "../context/AuthContext";
import { useState } from 'react'
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "./Firebase";


const SendMessage = () => {
    const [value, setValue] = useState("")
    const {User: uid, userName: name, photoURL} = useContext(SignInContext)

    const handleSend = async (e) =>{
        e.preventDefault()

        if(value.trim() === "") {
          alert("Enter valid message!")
          return
        }

        await addDoc(collection(db, "messages"), {
          text: value,
          name,
          createdAt: serverTimestamp(),
          avatar: photoURL,
          uid
        })
        setValue('')
    }

  return (
    <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg'>
        <form onSubmit={handleSend} className='containerWrap flex px-2'>
            <input value={value} onChange={e => setValue(e.target.value)} className='input w-full focus:outline-none rounded-r-none' type="text"/>
            <button type='submit' className='w-auto text-black rounded-r-lg px-5 text-sm'>Send</button>
        </form>
    </div>
  )
}

export default SendMessage