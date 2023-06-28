/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { auth, googleProvider, db } from "../components/Firebase";
import { signInWithPopup } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export const SignInContext = createContext();

export const SignInProvider = ({ children }) => {
    const [User, setUser] = useState("");
    const [userName, setUserName] = useState("");
    const [photoURL, setPhotoUrl] = useState("")
    const [uid, setUid] = useState("");

    let handleClick = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
        const uid = data.user.uid

        setUid(uid)
        console.log(uid)

        setUser(data.user.email);
        setUserName(data.user.displayName);
        setPhotoUrl(data.user.photoURL)

    const usersRef = collection(db, "messages");
    const userDocRef = doc(usersRef, data.user.uid);
        setDoc(
            userDocRef,
            {
                uid: data.user.uid,
                displayName: data.user.displayName,
                photoURL: data.user.photoURL,
            },
            { merge: true }
    );
    });
    };

    useEffect(() => {
    setUser(localStorage.getItem("Email"));
    setUserName(localStorage.getItem("Name"));
}, []);

    return (
        <SignInContext.Provider value={{ User, handleClick, userName, photoURL, uid }}>
            {children}
        </SignInContext.Provider>
    );
};