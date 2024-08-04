import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.Config";




export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
   
  
    const updateUserProfile = (name, email, image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            email:email,
            photoURL:image
        })
    }
    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = ()=>{
        setUser(null)
        signOut(auth)
    }
    //observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setLoading(true)
            if(user){
                setUser(user)
            }
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[auth])
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //       setLoading(true);
    //       if (user) {
    //         setUser(user);
    //       } else {
    //         setUser(null);
    //       }
    //       setLoading(false);
    //     });
    //     return () => unsubscribe();
    //   }, [auth]);
    const value = {createUser, user,logOut,updateUserProfile,logInUser,setUser,googleLogin,loading}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;